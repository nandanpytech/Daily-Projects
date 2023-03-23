import { Stack,Box } from '@mui/material'
import React from 'react'
import google from './assets/google.png'
import dropbox from './assets/dropbox.png'
import shopify from './assets/shopify.png'
import slack from './assets/slack.png'
import atlassian from './assets/atlassian.png'

function Companylogo() {
  return (
    <>
    <Box mb={15}>   
    <Stack sx={{margin:"0 auto"}} display="flex" justifyContent="center" spacing={10} direction="row">
        <img src={google} width="43px" height="33px" alt="" />
        <img src={dropbox} width="86px" height="27px" alt="" />
        <img src={shopify} width="86px" height="27px" alt="" />
        <img src={slack} width="86px" height="27px" alt="" />
        <img src={atlassian} width="86px" height="27px" alt="" />
    </Stack>

    </Box>
   

    </>
  )
}

export default Companylogo