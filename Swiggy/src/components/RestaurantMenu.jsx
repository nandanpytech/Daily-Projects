import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant_Details } from '../utils/const'
import Breadcrumb from './Breadcrumb'
import MenuItem from './MenuItem'
import RestaurantDetails from './RestaurantDetails'


function RestaurantMenu() {
  const {id}=useParams()

  const restaurantdetails=async()=>{
    const data= await fetch(Restaurant_Details+`${id}&submitAction=ENTER`)
    const res= await data.json()
    console.log(res)
  }
  useEffect(() => {
    restaurantdetails()
  }, [])
  
  return (
    <div className="menu">
        <Breadcrumb/>
        <RestaurantDetails/>
        <MenuItem/>
    </div>
 
  )
}

export default RestaurantMenu