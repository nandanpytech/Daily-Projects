import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { pricerange } from '../utils/CalculateRange'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import Dailogbox from './Dailogbox'
import RestaurantDetails from './RestaurantDetails'
import { Particularrestaurantdetails } from '../FetchData/RestaurantData'

function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const [ParticularItemdetails, setParticularItemdetails] = useState([])
  const [priceRange, setpriceRange] = useState()
  const [open, setOpen] = useState(false);
  const {resid}=useParams()
 
  useEffect(async() => {
    const res=await Particularrestaurantdetails(resid)
    setMenuItems(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
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