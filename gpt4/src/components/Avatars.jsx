import React from 'react'
import {AvatarGroup,Avatar,Box, Stack, Typography} from '@mui/material'

function Avatars() {
  return (
    <>
    <Stack display="flex" spacing={4} direction="row">
       <AvatarGroup style={{float:"left"}} max={7} >
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </AvatarGroup>   

        <Typography sx={{alignSelf:"center"}} variant="body1" gutterBottom color="white">1,600 people requested access a visit in last 24 hours</Typography>
      </Stack>  
    </>
  )
}

export default Avatars