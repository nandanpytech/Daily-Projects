import { Box, Grid, Paper, Stack, Typography,styled } from '@mui/material'
import React from 'react'

function PaperContent() {

    const Firststack=styled(Stack)`
        
        & > h6{
            color:white;
        }
    `
    const Secondstack=styled(Stack)`
        & > h5{
            background:-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
            font-weight:700;
        },
        & > p{
            background:-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
        }
       
    `

        const gradient={
            WebkitBackgroundClip: "text",
            
        WebkitTextFillColor: "transparent",
        }


  return (
   <>
   <Paper sx={{ padding:" 3rem 3rem", margin:"0 2.5rem",background:"#042c54"}} elevation={6}  square>
        <Firststack mb={10} display="flex" spacing={20} direction="row">
            <Typography variant="h6">What is GPT-4</Typography>
            <Typography variant='body1' color="#81AFDD">Lorem ipsum dolor sit amet consectetur adipisicing elit.sdqbaw consectetur adipisicing elit.sdqbaw<br/>
                        Adipisci possimus animi doloremque maiores nesciunt, quos consectetur adipisicing elit.sdqbaw <br/>
                        veritatis nostrum itaque, eum tenetur modi perferendis consectetur consectetur adipisicing elit.sdqbaw <br/>
            </Typography>
        </Firststack>

        <Secondstack mb={10}   display="flex" direction="row">
            <Typography style={gradient} variant="h5" >
                The possibilities are beyond <br/>
                your imagination
            </Typography>
            <Typography sx={{marginLeft:"auto",alignSelf:"center"}}  style={gradient} variant="body2">Explore the library</Typography>
        </Secondstack>

        <Grid container spacing={4}>
            <Grid item>
                <Stack display="flex" spacing={4}>
                    <Typography variant="h6" color="white">Chatbots</Typography>
                    <Typography variant='body1' color="#81AFDD">Lorem ipsum dolor sit doloremque queamew<br/>
                                Adipisci possimus animi  maioresr adipisicing sddf <br/>
                                veritatis nostrum itaque, eum tenetur modi  <br/>
                    </Typography>

                </Stack>
            </Grid>
            <Grid item>
                <Stack display="flex" spacing={4}>
                    <Typography variant="h6" color="white">Chatbots</Typography>
                    <Typography variant='body1' color="#81AFDD">Lorem ipsum dolor sit doloremque queamew<br/>
                                Adipisci possimus animi  maioresr adipisicing sddf <br/>
                                veritatis nostrum itaque, eum tenetur modi  <br/>
                    </Typography>

                </Stack>
            </Grid>
            <Grid item>
                <Stack display="flex" spacing={4}>
                    <Typography variant="h6" color="white">
                        <Box></Box>
                        Chatbots</Typography>
                    <Typography variant='body1' color="#81AFDD">Lorem ipsum dolor sit doloremque queamew<br/>
                                Adipisci possimus animi  maioresr adipisicing  <br/>
                                veritatis nostrum itaque, eum tenetur modi  <br/>
                    </Typography>

                </Stack>
            </Grid>
        </Grid>
   </Paper>
   </>
  )
}

export default PaperContent