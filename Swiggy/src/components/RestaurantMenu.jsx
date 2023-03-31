import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { pricerange } from '../utils/CalculateRange'
import { Restaurant_Details } from '../utils/const'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import Dailogbox from './Dailogbox'
import RestaurantDetails from './RestaurantDetails'


function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const [ParticularItemdetails, setParticularItemdetails] = useState([])
  const [priceRange, setpriceRange] = useState({})
  const [open, setOpen] = useState(false);
  const {resid}=useParams()

  const restaurantdetails=async()=>{
    const data= await fetch(Restaurant_Details+`${resid}&submitAction=ENTER`)
    const res= await data.json()
    setMenuItems(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  }
  useEffect(() => {
    restaurantdetails()
  }, [])
  
  
  const handleOpen = (ItemDetails) =>{
      setOpen(true);
      setParticularItemdetails(ItemDetails)
     setpriceRange (pricerange(ItemDetails))
  }
    
  const handleClose = () => setOpen(false);
  return (
    <div className="menu">
        <Breadcrumb/>
        <RestaurantDetails />
        {
          MenuItems.map((e,index)=>{
            if(e.card.card.title){
              return <ItemAccordion handleOpen={handleOpen} ItemCards={e?.card?.card?.itemCards || e?.card?.card?.categories} key={index} categorylength={e?.card?.card?.itemCards?.length} title={e.card?.card?.title}></ItemAccordion>
            }
           
          })
        }
        <Dailogbox priceRange={priceRange} open={open} ItemDetails={ParticularItemdetails} handleClose={handleClose}/>
    </div>
 
  )
}

export default RestaurantMenu