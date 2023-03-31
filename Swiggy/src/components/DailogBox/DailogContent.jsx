import React from 'react'
import { Stack,Typography,Checkbox} from '@mui/material';
import { FlareIcon } from '../../utils/Icons';

function DailogContent({ItemDetails}) {
    const PricingModels=["Full","Half","Quat"]
    console.log(ItemDetails);
  return (
    <>
        <Stack display="flex" direction="row" spacing={1} >
            <FlareIcon color='#93959f' fontSize='sm'  style={{alignSelf:"center"}}></FlareIcon>
                <Typography variant='h6' sx={{fontWeight:"700",color:"black"}}>Portion</Typography>
                <Typography variant='body2' style={{alignSelf:"center"}}>(required)</Typography>
        </Stack>
                {
                    ItemDetails?.variantsV2?.pricingModels?.map((element,index)=>{
                        if(index==0){
                            return (
                                <>
                                <Stack key={index} display="flex" direction="row" spacing={2}>
                                      
                                      <Checkbox  defaultChecked /> 
                                      <Typography style={{alignSelf:"center",color:"black"}}>{PricingModels[index]}</Typography>
                                      <Typography variant='body2' style={{alignSelf:"center"}}>₹{element?.price/100}</Typography>
                                </Stack>
                                </>
                            )
                        }else{
                            return (
                                <>
                                  <Stack key={index}   display="flex" direction="row"  spacing={2}>
                                     <Checkbox  /> 
                                     <Typography style={{alignSelf:"center",color:"black"}}>{PricingModels[index]}</Typography>
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