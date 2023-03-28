import {React,useRef,useEffect,useState,useContext} from 'react'
import { Card,CardMedia } from '../utils/Icons'
import Slider from "react-slick";
import { Box } from '@mui/material';
import { Carousel_Image_Url } from '../utils/const';
import CarouselShimmer from './CarouselShimmer';
import { FoodContext } from '../context/Provide';

function Carousel() {
    const {setallRestaurant} = useContext(FoodContext)
    const [Imagedata, setImagedata] = useState([])
    const slider = useRef(null)
    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    
    async function fetchImages(){
        const Data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
        const Images_data=await Data.json()
        setallRestaurant(Images_data.data.cards[2].data.data.cards)
        setImagedata(Images_data.data.cards[0].data.data.cards)
   
    }
    console.log(Imagedata)
    

    useEffect(() => {
        fetchImages()
    }, [])
    
     
  return (
    <>
    {
        Imagedata.length!=0?(
            <Box bgcolor="#282c3f" p={4}>
            {
                    <Slider  ref={slider} {...settings}>
                        {
                            Imagedata.map((element)=>{
                            return (<Card sx={{width:"max-content !important"}}>
                                        <CardMedia sx={{ height: 260, width:260 }} image={Carousel_Image_Url+"/"+element.data.creativeId}/>
                                    </Card>)
                            })
                        }
                    </Slider>
                   
             }
            </Box>
        ):
        <Box  bgcolor="#282c3f" p={4}>
            <CarouselShimmer/>   
        </Box>
    }
        
    </>
  )
}

export default Carousel