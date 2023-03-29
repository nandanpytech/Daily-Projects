import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant_Details } from '../utils/const'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import RestaurantDetails from './RestaurantDetails'


function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const {resid}=useParams()

  const restaurantdetails=async()=>{
    const data= await fetch(Restaurant_Details+`${resid}&submitAction=ENTER`)
    const res= await data.json()
    // console.table(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    setMenuItems(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  }
  useEffect(() => {
    restaurantdetails()
  }, [])
  
  return (
    <div className="menu">
        <Breadcrumb/>
        <RestaurantDetails />
        {
          MenuItems.map((e,index)=>{
            if(e.card.card.title){
              return <ItemAccordion ItemCards={e.card.card.itemCards || e.card.card.categories} key={index} categorylength={e.card?.card?.itemCards?.length} title={e.card?.card?.title}></ItemAccordion>
            }
           
          })
        }
    </div>
 
  )
}

export default RestaurantMenu