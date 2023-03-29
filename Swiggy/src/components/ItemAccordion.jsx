import React from 'react'
import MenuItem from './MenuItem'
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import { ExpandMoreIcon } from '../utils/Icons';


function ItemAccordion() {
  return (
    <>
         <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontWeight:700}}>Recommended (23)</Typography>
                 </AccordionSummary>

                <AccordionDetails>
                        <MenuItem />
                        <MenuItem />
                </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ItemAccordion