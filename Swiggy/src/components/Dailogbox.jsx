import {React,useState} from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions, DialogContentText } from '@mui/material';
import { Typography, styled,Button,Box } from '@mui/material';
import Dailogtitle from './DailogBox/Dailogtitle';
import DailogContent from './DailogBox/DailogContent';
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../ReduxSlice/Cartslice';

function Dailogbox({open,handleClose,ItemDetails,priceRange}) {
  const dispatch=useDispatch()
  const cartItems=useSelector(store=>store.cart)


  const [counter, setcounter] = useState(1)
  const PricingModels=["Full","Half","Quat"]
    // console.log(ItemDetails);

    const NextStepButton=styled(Button)`
    width: 100%;
    color: #4caf50;
    border: 1px solid #4caf50;
    display: flex;
    margin-top: 2rem !important;
    justify-content: space-between;
    padding: .5rem 1rem;
  `
  const change={
    color:"#fc8019",
    border:"1px solid #fc8019",
    fontSize:".5rem",
    marginLeft:"1.9rem"
  }
  const dailogboxclose=()=>{
    setcounter(1)
    handleClose()
  }


  const HandleModalButton=(counter)=>{
    if(counter==1){
      setcounter(prev=>prev+1)
    }else{
      dailogboxclose()
    }
  }


  const handleOrderedItem=(OrderedItem)=>{
    if(cartItems.ResId==""){
      dispatch(addItem({OrderedItem,resid}))
    }
    dailogboxclose()
  }
  return (
    <div>
      <Dialog open={open} onClose={dailogboxclose} fullWidth maxWidth="xs">
        <DialogTitle>
          <Dailogtitle ItemDetails={ItemDetails} priceRange={priceRange}/>
        </DialogTitle>  


        <DialogContent>
            <DialogContentText>
            {counter!==1 && 
                <Box mt={2}>
                  <Typography variant='body1' color="black" ml={4} fontWeight={600}>Portion</Typography>
                  <Button variant='outlined' style={change} onClick={()=>setcounter((prev)=>prev-1)}>Change</Button>
              </Box>
             }
              {
                counter==1?  <DailogContent name="Portion" ItemDetails={ItemDetails?.variantsV2?.pricingModels}/> 
                : 
                ItemDetails?.addons?.map((addons,index)=>{
                  return  <DailogContent key={index}  name={addons?.groupName} ItemDetails={addons?.choices}/>
                })
               
              }
            </DialogContentText>
        </DialogContent>

        <DialogActions> 
            {
              counter==1?
                 <NextStepButton onClick={()=>HandleModalButton(counter)}  variant="outlined">
                      <Typography variant='body2' fontWeight={700}>step 1/1'</Typography>
                      <Typography variant='body2' fontWeight={700}>Continue</Typography>
                  </NextStepButton>
           
              :
              <NextStepButton onClick={()=>handleOrderedItem(ItemDetails)}  variant="outlined">
                 <Typography variant='body2' fontWeight={700}>{`Total ₹${420}`}</Typography>
                 <Typography variant='body2' fontWeight={700}>Add Item</Typography>
              </NextStepButton>
             
            }
        </DialogActions>
      </Dialog>
        
      
      
    </div>
  );


}

export default Dailogbox