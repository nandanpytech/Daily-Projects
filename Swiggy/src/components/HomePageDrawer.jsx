import {React, useContext,useState} from 'react'
import { Box, Drawer, InputBase, Typography } from '@mui/material';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import { FoodContext } from '../context/Provide';
import { CloseIcon } from '../utils/Icons';
import { getlocationdata } from '../FetchData/FetchRegionData';

function HomePageDrawer() {
    const {isdraweropen,setisdraweropen,inputdata,setinputdata}=useContext(FoodContext)

    const handleinput=(e)=>{
        setinputdata(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        getregiondata()
    }
    const getregiondata=async()=>{
        const data=await getlocationdata(inputdata)
        console.log(data);
    }
  return (
        <Drawer
        anchor="left"
        open={isdraweropen}
        onClose={()=>setisdraweropen(false)}
        >
            <Box p={4}  role="presentation" width='450px' >
                <CloseIcon onClick={()=>setisdraweropen(false)} style={{cursor:"pointer"}}/>
                <form action="" onSubmit={(e)=>handlesubmit(e)}>
                    <InputBase 
                        onChange={(e)=>handleinput(e)}
                        value={inputdata}
                        style={{border:".3px solid #a9abb2",padding:".3rem 1rem",marginTop:"2rem",width:"100%"}}
                        placeholder="Search for area,street name..."
                    ></InputBase>
                </form>
                

                <Box display="flex"  p={3} mt={5} gap="1rem" style={{border:".3px solid #a9abb2"}}>
                    <GpsFixedOutlinedIcon/>
                    <Box>
                        <Typography fontSize={15} fontWeight="bold" color="#282c3f">Get Current Location</Typography>
                        <Typography fontSize={10} color="#93959f">Get Current Location</Typography>

                    </Box>
                </Box>


            </Box>
            

        </Drawer>
  )
}

export default HomePageDrawer