import React, { useContext } from 'react'
import {Box, Button, ButtonGroup, Divider, Stack,Typography } from '@mui/material';
import { card_image } from '../utils/Images';
import styled from '@emotion/styled';
import { ModeStandbyIcon } from '../utils/Icons';
import { useSelector } from 'react-redux';



function Cart() {
  const cartItems=useSelector(store=>store.cart)
  console.log(cartItems);
    const MainStack=styled(Stack)`
        max-width:350px;
        background-color:white;

    `
    const Btngroup=styled(ButtonGroup)`
    & > button{
        color:"#60b246 !important"
    }

    `

    const BillDetails=styled(Stack)`
      & > p{
        color:"#282c3f !important"
      }
      & > div {
        display:flex;
        width:100%;
        & > p{
          margin-left: auto;
          align-self: center;
         }
      }
    `
  return (
    <>
      <div style={{minHeight:"100vh",background:"#e9ecee",padding:"1rem"}}>
          <MainStack mt={12} display="flex"  spacing={2}>
               <Box style={{padding:"1rem"}}>
                  <Stack display="flex" spacing={2} direction="row">
                      <img width="50" height="50" src={card_image+"r3rrhxap8e8xgf1ksurb"} alt="" />
                      <Stack >
                        <Typography  fontWeight={700} variant='body1'>ASEAN - On the Edge</Typography>
                        <Typography  variant='body2'>Ashok Nagar</Typography>
                      </Stack>
                  </Stack>
               </Box>

               <Box style={{overflowY:"scroll",maxHeight:"30vh",padding:"1rem",paddingTop:0}}>
                  <Stack mb={4} display="flex" spacing={2} direction="row">
                    <ModeStandbyIcon sx={{color:'#60b246',fontSize:"1rem"}}></ModeStandbyIcon>
                    <Stack display="flex">
                        <Typography   fontSize={14} >Veg Whoper</Typography>
                        <Typography fontSize={10}>Customizze</Typography>
                    </Stack>
                       <Btngroup  style={{color:"#60b246"}} variant='outlined'>
                          <Button>-</Button>
                          <Button >1</Button>
                          <Button>+</Button>
                       </Btngroup>

                       <Typography fontSize={12} style={{alignSelf:"center", marginLeft:"auto !important"}}> ₹99</Typography>
               
                  </Stack>
                  <Stack mb={4} display="flex" spacing={2} direction="row">
                    <ModeStandbyIcon sx={{color:'#60b246',fontSize:"1rem"}}></ModeStandbyIcon>
                    <Stack display="flex">
                        <Typography   fontSize={14} >Veg Whoper</Typography>
                        <Typography fontSize={10}>Customizze</Typography>
                    </Stack>
                       <Btngroup  style={{color:"#60b246"}} variant='outlined'>
                          <Button>-</Button>
                          <Button >1</Button>
                          <Button>+</Button>
                       </Btngroup>

                       <Typography fontSize={12} style={{alignSelf:"center", marginLeft:"auto !important"}}> ₹99</Typography>
               
                  </Stack>

                  <BillDetails display="flex" spacing={1}>
                          <Typography  fontSize={12}    variant='body1'>Bill Details</Typography>
                          <Box >
                            <Typography  fontSize={12}  component='h2'  variant='body1'>Item Total</Typography>
                            <Typography fontSize={12} > ₹99</Typography>
                          </Box>
                          <Box>
                            <Typography  fontSize={12}  component='h2'  variant='body1'>Delivery Fee | 7.5 kms</Typography>
                            <Typography fontSize={12} > ₹924</Typography>
                          </Box>
                          <Divider></Divider>
                          <Box>
                            <Typography  fontSize={12}  component='h2'  variant='body1'>Govt Taxes & Other Charges</Typography>
                            <Typography fontSize={12} > ₹131</Typography>
                          </Box>
                         
                  </BillDetails>
               </Box>

                  <Box style={{padding:"1rem"}}>
                     <Stack display="flex" direction="row" justifyContent="space-between">
                           <Typography   fontWeight={700}  variant='body1'>To Pay</Typography>
                            <Typography fontWeight={700}  variant='body1' > ₹131</Typography>
                     </Stack>
                   </Box>
            </MainStack>
    </div>        
    </>
  )
}

export default Cart