import { Card, CardActionArea, CardMedia,Box, styled, Typography, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Menu_Item_Image } from '../utils/const'
import { EjectIcon } from '../utils/Icons'



function MenuItem() {
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
     &>div > button > img{
        width: 130px;
     }
     & > button{
        color: #60b246;
     }
    `
  return (
    <Stack display="flex" mt={4} justifyContent="space-between" direction="row">
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
            <Button variant='outlined'> ADD </Button>
        </ItemImage>
    </Stack>
  )
}

export default MenuItem