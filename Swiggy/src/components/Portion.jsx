import React from 'react'
import { Stack,Typography,Modal,Checkbox, styled  } from '@mui/material';
import { EjectIcon } from '../utils/Icons';




function Portion({open,handleClose,ItemDetails}) {
    // console.log(ItemDetails);
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };




  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} bgcolor="white" display="flex" spacing={1}>
            <Stack display="flex" direction="row" spacing={1} >
                <EjectIcon sx={{color:"red",alignSelf:"center"}}></EjectIcon>
                <Typography variant='h6'>Customize "{ItemDetails.name}" </Typography>
            </Stack>
            <Typography></Typography>
                {
                    ItemDetails?.addons?.map((addson,index)=>{
                        if(index==0){
                            return (
                                <>
                                <Stack   display="flex" direction="row" spacing={2}>
                                      <Checkbox  defaultChecked /> <Typography style={{alignSelf:"center"}}>{addson.groupName}</Typography>
                                </Stack>
                                </>
                            )
                        }else{
                            return (
                                <>
                                  <Stack   display="flex" direction="row"  spacing={2}>
                                     <Checkbox  /> <Typography style={{alignSelf:"center"}}>{addson.groupName}</Typography>
                                </Stack>
                                </>
                            )
                        }
                     
                    
                         
                     
                       
                    })
                }
          
        </Stack>
      </Modal>
    </div>
  );


}

export default Portion