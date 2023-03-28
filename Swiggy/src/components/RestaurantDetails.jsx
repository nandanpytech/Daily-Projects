import React from 'react'
import { Box,Divider,Stack,styled, Typography } from '@mui/material'
import { StarIcon,DirectionsBikeIcon, TimelapseIcon } from '../utils/Icons'

function RestaurantDetails() {
    const Namestack=styled(Stack)`
    & > div{
      & > h6{
        font-weight: 700;
      }
      & > p{
        color:#93959f ;
        font-size: .8rem;
        margin-bottom: 2px;

      }
      
    }
  `

  const Ratingstack=styled(Stack)`
    width: max-content;
    & > svg{
      font-size: 1.3rem;
      color: green;
    }
    & > span{
        font-weight: 600;
        color: green;
    }
    & > hr {
      padding: 0 5px;
    }
  `

  const DeliveryFee=styled(Stack)`
        color:#93959f ;
        & > svg{
          font-size:1rem;
        }
        & > p{
          font-size: .7rem;
        }
  `

  const DeliveryTime=styled(Stack)`
    & > div > p {
      font-weight: 700;
    }
  
  `
  return (
    <>
        
   <Namestack display="flex" mb={2} direction="row" justifyContent="space-between">
      <Box>
        <Typography variant='h6' component="h6">Hotel Empire</Typography>
        <Typography variant='body2' component="p">North Indian, Kebabs</Typography>
        <Typography variant='body2' component="p">Brigade Road, 2.0 km</Typography>
      </Box>

      <Box>
          <Ratingstack mb={.3} display="flex"  spacing={.5}  direction="row" justifyContent="center">
            <StarIcon />
            <Typography variant='boy1'>
                 3.5
            </Typography>
          </Ratingstack>
            <Divider />

            <Typography sx={{fontSize:".7rem !important"}} variant='body1'>
              1k+ Ratings
            </Typography>
      </Box>
   </Namestack>

    <DeliveryFee display="flex" mb={2} direction="row" spacing={1}>
      <DirectionsBikeIcon/>
        <Typography>
            2 kms | ₹29 Delivery fee will apply
        </Typography>
    </DeliveryFee>

    <Divider/>

    <DeliveryTime display="flex" direction="row" spacing={3}  mt={2}>
      <Stack display="flex" direction="row" spacing={1}>
        <TimelapseIcon/>
        <Typography variant='body1'>
            30 MINS
        </Typography>
      </Stack>

      <Stack display="flex" direction="row" spacing={.5}>
        <Typography variant='body1'>
             ₹450 for two
        </Typography>
      </Stack>
    </DeliveryTime>
    </>
  )
}

export default RestaurantDetails