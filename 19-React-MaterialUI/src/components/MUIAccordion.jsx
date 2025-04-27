import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {

    const [expanded, setExpanded] = useState('' | false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quae dolor illo fugit, neque tenetur officiis maiores magni mollitia eligendi assumenda perspiciatis iure illum, sed et deserunt provident, repellat ea.</AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 2</AccordionSummary>
                <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quae dolor illo fugit, neque tenetur officiis maiores magni mollitia eligendi assumenda perspiciatis iure illum, sed et deserunt provident, repellat ea.</AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quae dolor illo fugit, neque tenetur officiis maiores magni mollitia eligendi assumenda perspiciatis iure illum, sed et deserunt provident, repellat ea.</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion