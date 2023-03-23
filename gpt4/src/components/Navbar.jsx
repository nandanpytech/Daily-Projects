import React from 'react'
import {Button, Stack, styled,Typography} from '@mui/material'


function Navbar() {
const Ul=styled(Stack)`
    color:white;
    &>h6{
        padding-top:.2rem;  
    }
`

const Navright=styled(Stack)`
    margin-left:auto !important;
    color:white;
    & >h6{
        padding-top:.2rem;
    }
`

  return (
    <>
      <Stack display="flex" spacing={8} direction="row">
        <Typography variant='h5' sx={{color:"white",fontWeight:700}}>GPT-4</Typography>
        <Ul display="flex" spacing={6} direction="row">
            <Typography variant='subtitle1'>Home</Typography>
            <Typography variant='subtitle1'>What is GPT?</Typography>
            <Typography variant='subtitle1'>Open AI</Typography>
            <Typography variant='subtitle1'>Case Studies</Typography>
            <Typography variant='subtitle1'>Library</Typography>
        </Ul>

        <Navright disply="flex" spacing={4} direction="row">
            <Typography variant='subtitle1'>Sign in</Typography>
            <Button color='warning' variant="contained"> Sign up</Button>
        </Navright>
      </Stack>
    </>
  )
}

export default Navbar