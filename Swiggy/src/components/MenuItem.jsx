import { Card, CardActionArea, CardMedia,Box, styled, Typography, Button, Divider } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Menu_Item_Image } from '../utils/const'
import { EjectIcon } from '../utils/Icons'



function MenuItem({ItemDetails}) {
   const {category,imageId,name}=ItemDetails
    const ItemName=styled(Stack)`
        & > h6 {
            font-weight: 700;
            margin-bottom: 5px;
        }
        & > span{
            color: #93959f;
            margin-top: 10px;
        }
       
    `
    const ItemImage=styled(Box)`
    position: relative;
     &>div > button > img{
        width: 130px;
     }
     & > button{
        color: #60b246;
        position: absolute;
        bottom: 0;
        left: 25%;
        background-color: white;
     }
    `
  return (
   <>
       <Box mb={4}>
            <Stack display="flex" mb={4} justifyContent="space-between" direction="row">
            <ItemName>
                <EjectIcon/>
                <Typography component="h6">
                Chilly Kebab
                </Typography>
                <Typography component="p" variant='body2'>
                    ₹29 
                </Typography>
                <Typography component="span" variant='body2'>
                    Serves 1
                </Typography>
            </ItemName>


            <ItemImage>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img"  image={Menu_Item_Image}/>
                    </CardActionArea>
                </Card>
                <Button variant='contained' > ADD </Button>
            </ItemImage>
            </Stack>

            <Divider/>
       </Box>
   </>
  )
}

export default MenuItem