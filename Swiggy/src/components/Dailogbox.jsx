import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions, DialogContentText } from '@mui/material';
import { Typography, styled,Button  } from '@mui/material';
import Dailogtitle from './DailogBox/Dailogtitle';
import DailogContent from './DailogBox/DailogContent';




function Dailogbox({open,handleClose,ItemDetails,priceRange}) {
    // console.log(ItemDetails);
    const PricingModels=["Full","Half","Quat"]

    const NextStepButton=styled(Button)`
    width: 100%;
    color: #4caf50;
    border: 1px solid #4caf50;
    display: flex;
    margin-top: 2rem !important;
    justify-content: space-between;
    padding: .5rem 1rem;
  `
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>
          <Dailogtitle ItemDetails={ItemDetails} priceRange={priceRange}/>
        </DialogTitle>  


        <DialogContent>
            <DialogContentText>
              <DailogContent ItemDetails={ItemDetails}/>
            </DialogContentText>
        </DialogContent>



        <DialogActions>
           <NextStepButton  variant="outlined">
                <Typography variant='body2' fontWeight={700}>step 1/1</Typography>
                <Typography variant='body2' fontWeight={700}>Continue</Typography>
            </NextStepButton>
        </DialogActions>
      </Dialog>
        
       {/* <ModalStep1 ItemDetails={ItemDetails} priceRange={priceRange}/> */}
      
    </div>
  );


}

export default Dailogbox