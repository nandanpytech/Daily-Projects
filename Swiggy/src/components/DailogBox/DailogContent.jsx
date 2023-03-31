import React from 'react'
import { Stack,Typography,Checkbox} from '@mui/material';
import { FlareIcon } from '../../utils/Icons';

function DailogContent({ItemDetails,name}) {
    const PricingModels=["Full","Half","Quat"]
    console.log(ItemDetails);
  return (
    <>
        <Stack display="flex" direction="row" mt={4} spacing={1} >
            {name=="Portion" && <FlareIcon color='#93959f' fontSize='sm'  style={{alignSelf:"center"}}></FlareIcon>} 
            <Typography variant='h6' sx={{fontWeight:"700",color:"black",marginLeft:name=="Portion"?"0":"2rem"}}>{name}</Typography>
                <Typography variant='body2' style={{alignSelf:"center"}}>
                    {name=="Portioin"?(required):""}
                </Typography>
        </Stack>


                {
                    ItemDetails?.map((element,index)=>{
                        if(index==0){
                            return (
                                <>
                                <Stack key={index} display="flex" direction="row" spacing={2}>
                                      {
                                        name=="Portion"?  <Checkbox style={{color:'#4caf50'}} defaultChecked /> :
                                        <Checkbox style={{color:'#4caf50'}} /> 
                                      }
                                    
                                      <Typography style={{alignSelf:"center",color:"black"}}>{element.name || PricingModels[index]}</Typography>
                                      <Typography variant='body2' style={{alignSelf:"center"}}>₹{element?.price/100}</Typography>
                                </Stack>
                                </>
                            )
                        }else{
                            return (
                                <>
                                  <Stack key={index}   display="flex" direction="row"  spacing={2}>
                                     <Checkbox  style={{color:'#4caf50'}}/> 
                                     <Typography style={{alignSelf:"center",color:"black"}}>{element.name || PricingModels[index]}</Typography>
                                     <Typography variant='body2' style={{alignSelf:"center"}}>₹{element?.price/100}</Typography>
                                </Stack>
                                </>
                            )
                        }
                    })
                }
    </>
  )
}

export default DailogContent