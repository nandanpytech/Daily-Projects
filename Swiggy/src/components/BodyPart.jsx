import {React,useContext} from 'react'
import { FoodContext } from '../context/Provide';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack,Box, Divider, Grid } from '@mui/material';
import { StarIcon } from '../utils/Icons';
import { card_image } from '../utils/Images';
import { Link } from 'react-router-dom';


function BodyPart() {
  const {allRestaurant} = useContext(FoodContext)
  console.log(allRestaurant)
  return (
    <>
    <Grid container spacing={6} sx={{padding:"1rem"}}>  
      {
        allRestaurant.map((element,index)=>{
          return (
            <Grid  item xs={3}>
              <Link key={index} to={`/restaurant/${element?.data?.id}`}>
                <Card sx={{ maxWidth: 245 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={card_image+element?.data?.cloudinaryImageId}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="subtitle1" fontWeight="bold" component="div">
                              {element?.data?.name}
                          </Typography>
                          <Stack flexWrap="wrap" display="flex" direction="row" spacing={.3}>
                              {
                                element?.data?.cuisines.map(el=>{
                                  return (
                                      <Typography variant="body2" color="text.secondary">
                                      {el},
                                    </Typography>
                                  )
                                })
                              }
                          </Stack>
                      
                          <Stack display="flex" mt={2} mb={1} direction="row" alignItems="center" spacing={3}>
        
                              <Stack p={.2} display="flex" direction="row" bgcolor="#db7c38" spacing={.5}>
                                  <StarIcon  sx={{alignSelf:"center",fontSize:"1rem",color:"white"}}/>
                                  <Box>
                                    <Typography fontSize=".8rem" color="white"  variant='body2' alignSelf="self-end"> 
                                        {element?.data?.avgRating} 
                                    </Typography>
                                  </Box>
                              </Stack>
        
                              <Typography fontSize=".7rem" variant='body1'> 47 mins</Typography>
                              <Typography fontSize=".7rem" variant='body1'> ₹300 FOR TWO</Typography>
        
                            
                          </Stack>
        
                          <Divider/>
                        </CardContent>
                      </CardActionArea>
                </Card>
              </Link>
            </Grid>  
          )
        })
      }
    </Grid>
   

    </>
  )
}

export default BodyPart