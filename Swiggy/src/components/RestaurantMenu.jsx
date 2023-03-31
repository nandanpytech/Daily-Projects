import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant_Details } from '../utils/const'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import Portion from './Portion'
import RestaurantDetails from './RestaurantDetails'


function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const [ParticularItemdetails, setParticularItemdetails] = useState([])
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
  
  const pricerange=(ItemDetails)=>{
    let initial,last;
    const prices=ItemDetails?.variantsV2?.pricingModels
    initial=prices[prices.length-1].price/100
    last=prices[0].price/100
    console.log(initial,last);
  }
  const handleOpen = (ItemDetails) =>{
      setOpen(true);
      setParticularItemdetails(ItemDetails)
      pricerange(ItemDetails)
  }
  // console.log(ParticularItemAddson);
    
  const handleClose = () => setOpen(false);
  return (
    <div className="menu">
        <Breadcrumb/>
        <RestaurantDetails />
        {
          MenuItems.map((e,index)=>{
            if(e.card.card.title){
              return <ItemAccordion  handleOpen={handleOpen} ItemCards={e.card.card.itemCards || e.card.card.categories} key={index} categorylength={e.card?.card?.itemCards?.length} title={e.card?.card?.title}></ItemAccordion>
            }
           
          })
        }
        <Portion open={open} ItemDetails={ParticularItemdetails} handleClose={handleClose}/>
    </div>
 
  )
}

export default RestaurantMenu