import { Restaurant_Details } from '../utils/const'

export const Particularrestaurantdetails=async(resid)=>{
    const data= await fetch(Restaurant_Details+`${resid}&submitAction=ENTER`)
    const res= await data.json()
    return res;
}

export const allRestaurant=async()=>{
    const Data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
    const Rescards=await Data.json()
    return Rescards
}