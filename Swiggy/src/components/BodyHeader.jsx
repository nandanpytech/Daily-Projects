import { Stack, Divider, Typography, Box, styled } from '@mui/material'
import React from 'react'

function BodyHeader() {

    const Secondstack=styled(Stack)`
        &> h6{
            color: #686b78;
        }
        & > h6:hover{
            cursor: pointer;
        }
    `
  return (
   <>
    <Box sx={{margin:"2rem 1rem"}}>
        <Stack display="flex" direction="row">
            <Stack display="flex" direction="row" spacing={1}>
                <Typography alignSelf="center" variant='h5' fontWeight="800">
                    1547
                </Typography>
                <Typography alignSelf="center" variant='h5' fontWeight="800">
                    restaurants
                </Typography>
            </Stack>

            <Secondstack display="flex" direction="row" spacing={5} sx={{marginLeft:"auto !important"}}>
                <Typography alignSelf="center" variant='subtitle1'>
                    Relevence
                </Typography>
                <Typography alignSelf="center" variant='subtitle1'>
                Delivery Time
                </Typography>
                <Typography alignSelf="center" variant='subtitle1'>
                    Rating
                </Typography>
                <Typography alignSelf="center" variant='subtitle1'>
                    Cost: Low To High
                </Typography>
                <Typography alignSelf="center" marginRight={4} variant='subtitle1'>
                    Cost: High To Low
                </Typography>
                <Stack display="flex" direction="row" spacing={1}>
                        <Typography alignSelf="center" variant='subtitle1' fontWeight="bold">
                                Filters
                        </Typography>
                        <div className='Filter-icon'>
                            <span id="Filter-icon-inside"></span>
                        </div>
                </Stack>
            </Secondstack>
        </Stack>
        <Divider/>
    </Box>
  
   </>
  )
}

export default BodyHeader