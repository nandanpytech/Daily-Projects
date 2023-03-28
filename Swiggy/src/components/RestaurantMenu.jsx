import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant_Details } from '../utils/const'


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
     <h1>hk</h1>
  )
}

export default RestaurantMenu