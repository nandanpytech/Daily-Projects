import { Box, Stack, Typography,styled,OutlinedInput,ButtonGroup,Button } from '@mui/material'
import React from 'react'
import mask from './assets/ai.png'
import Avatars from './Avatars'

function HeroPage() {
    const HeroText=styled(Box)`
        height:max-content;
        align-self:center;
        &> h2{
            background: -webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
            font-weight:bold;
            word-spacing:2px;
        },
        &> h6{
            color:#81AFDD;
            
        }
    `
    const gradient={
         WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }

    const EmailInput=styled(OutlinedInput )`
        background:#042c54;
        color:#81AFDD;
        width:70%;
    `

    const Buttongroup=styled(ButtonGroup)`
        margin-top:2rem;
        margin-bottom:2rem;
        width:75%;
    `
  return (
    <>
    <Box mt={8} mb={15}>
        <Stack display="flex" direction="row" spacing={8}>
            <HeroText>
                <Typography variant="h2" style={gradient}>
                    Let's Build Something <br/> 
                    amazing with GPT-3 <br/>OpenAI
                </Typography>

                <Typography variant="subtitle1" pt={4} pl={1} fontSize={20}>
                    Yet bed any for travelling assistance indulegence unpleasing <br/>
                    Not thoughts all exercise blessing.Indulegence way <br/>
                    everything joy alternation boisterous the attachment. Party <br/>
                    we years to order allow asked of.
                </Typography>

                <Buttongroup  variant='contained'>
                    <EmailInput    placeholder="Your Email Address" />
                    <Button color='warning' variant="contained" disableElevation> Get Started</Button>
                </Buttongroup>
                
                {/* Avatars */}
                 <Avatars/>

            </HeroText>
            <Box sx={{marginLeft:"auto !important"}}>
                <img src={mask} alt="" width="700px"/>
            </Box>

        </Stack>
    </Box>
    </>
  )
}

export default HeroPage