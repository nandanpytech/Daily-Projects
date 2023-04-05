import React from 'react'
import Snackbar from '@mui/material/Snackbar';

function Toast({isToastOpen}) {
    const state={
        vertical: 'bottom',
        horizontal: 'center',
    }
    const {vertical,horizontal}=state
  return (
    <>
         <Snackbar
         sx={{ backgroundColor: 'teal', color: 'coral' }} 
        anchorOrigin={{vertical,horizontal}}
        open={isToastOpen}
        // onClose={!isToastOpen}
        message="sldfkjslkfjsldfslkj"
        key={vertical + horizontal}
      />
    </>
  )
}

export default Toast