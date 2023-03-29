import React from 'react'
import {Stack, Typography, styled} from '@mui/material'
import { KeyboardArrowDownIcon,
    SearchIcon,
    DiscountOutlinedIcon,
    SupportOutlinedIcon,
    PersonOutlineOutlinedIcon,
    ShoppingBagOutlinedIcon} from '../utils/Icons'



function Navbar() {

const FirstStack=styled(Stack)`
    & > h4{
        text-decoration: underline;
    }
    & > p{
        font-size: 0.8rem;
    }
    &  #arrowicon{
        color:#fc8019 ;
        margin-left: 5px !important;
        font-size: 1.5rem;
    }
`

const SecondStack=styled(Stack)`
    margin-left: auto !important;
    margin-right: 1rem  !important;
    & > li{
        list-style-type: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
    }

`
  return (
    <Stack sx={{position:"fixed",top:0,width:"100%",backgroundColor:"white",zIndex:1}} display="flex" spacing={4} p={1} direction="row">
        <img width="100" height="50" src="https://banner2.cleanpng.com/20180616/afx/kisspng-swiggy-office-business-online-food-ordering-delive-swiggy-5b251ebb823014.9894761415291593555333.jpg" alt="" />
        <FirstStack display="flex" spacing={2} direction="row" alignItems="center">
            <Typography component="h4">
                Others
            </Typography>
            <Typography>
                Bengalurru,Karnatak,India 
             
            </Typography>
            <KeyboardArrowDownIcon id="arrowicon"/>
        </FirstStack>

        <SecondStack  display="flex" alignItems="center" spacing={8} direction="row">
                <li className="nav-list-item">
                   <SearchIcon/> Search
                </li>
                <li className="nav-list-item">
                   <DiscountOutlinedIcon/> 
                   Offers
                </li>
                <li className="nav-list-item">
                   <SupportOutlinedIcon/> Help</li>
                <li className="nav-list-item">
                   <PersonOutlineOutlinedIcon/> Nandan</li>
                <li className="nav-list-item">
                   <ShoppingBagOutlinedIcon/> Cart</li>
        </SecondStack>
          
    </Stack>
  )
}

export default Navbar