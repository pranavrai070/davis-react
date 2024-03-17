import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';
import FAQdata from '../data/FAQdata';

const FAQ = () => {
  const [expanded, setExpanded] = useState(new Array(FAQdata.length).fill(false));

  const handleAccordionChange = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className='faqMoveUp'>
      <h1 className="text-2xl text-center font-semibold">FAQs</h1>

      <div className='p-8'>
        {FAQdata.map((item, index) => (
          <Accordion
            key={index}
            className=''
            style={{ borderRadius: '20px', marginBottom: '12px' }}
            expanded={expanded[index]}
            onChange={() => handleAccordionChange(index)}
          >
            <AccordionSummary
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <KeyboardArrowRightIcon
                  style={{ transform: expanded[index] ? 'rotate(90deg)' : 'none' }}
                />
                <Typography variant="h8" style={{ marginLeft: '8px' }}>
                  {item.question}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
