import {React,useState,useEffect} from 'react'
import Carousel from './Carousel'
import BodyHeader from "./BodyHeader"
import BodyPart from "./BodyPart"
import { allRestaurant } from '../FetchData/RestaurantData'

function Home() {
  const [allRes, setallRes] = useState([])
  const [CarouselCard, setCarouselCard] = useState([])

  const fetchallRestaurant=async()=>{
    const ResData=await allRestaurant()
    setallRes(ResData.data.cards[2].data.data.cards)
    setCarouselCard(ResData.data.cards[0].data.data.cards)
  }
  console.log(allRes);
  useEffect(() => {
    fetchallRestaurant()
  }, [])
  
  return (
    <>
        <Carousel CaroCard={CarouselCard}/>
        <BodyHeader/>
        <BodyPart allRestaurant={allRes}/>
    </>
  )
}


export default Home