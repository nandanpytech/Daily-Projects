import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import RestaurantDetails from './RestaurantDetails'
import { Restaurant_Details } from '../utils/const'
import { allRestaurant } from '../FetchData/RestaurantData'

function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const [Allrestaurant, setAllrestaurant] = useState([])
  const {resid}=useParams()
 

  //Fetch Particular Restaurant Details
  const Particularrestaurantdetails=async(resid)=>{
    const data= await fetch(Restaurant_Details+`${resid}&submitAction=ENTER`)
    const res= await data.json()
    setMenuItems(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  }

  //Fetch all Restaurant details
  const fetchRestaurantDetails=async()=>{
    const ResDetils=await allRestaurant()
    setAllrestaurant(ResDetils.data.cards[2].data.data.cards)
  }

  useEffect(()=> {
    Particularrestaurantdetails(resid)
    fetchRestaurantDetails()
  }, [])


 
  
  return (
    <div className="menu">
        <Breadcrumb/>
        <RestaurantDetails Allrestaurant={Allrestaurant}/>
        {
          MenuItems.map((e,index)=>{
            if(e.card.card.title){
              return <ItemAccordion  ItemCards={e?.card?.card?.itemCards || e?.card?.card?.categories} key={index} categorylength={e?.card?.card?.itemCards?.length} title={e.card?.card?.title}></ItemAccordion>
            }
           
          })
        }
    </div>
 
  )
}

export default RestaurantMenu