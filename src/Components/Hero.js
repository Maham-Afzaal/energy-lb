import React from 'react'
import { Typography, Box } from '@mui/material';
import car from '../dataEnergy/car.png'
import './img.css';

const Hero = () => {
  return (
    <>
    <div style={{px:'24px',mb:'5rem'}}>
      <Box sx={{ position: 'relative', px: '20px', boxSizing: 'border-box', width: '100%', }}>
        <Box className='hero'>
          <Box className='hero1'></Box>
          <Box className='hero2'></Box>
          <Box className='hero3'></Box>
        </Box>
        <Box sx={{ position: 'relative',}}>
          <Box sx={{ height: {xs:'60vh',sm:'60vh',md:'90vh',lg:'90vh'}, display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
            <img src={car} style={{ px:'16px',objectFit: 'contain', width:'auto', height:'100%'}} />
          </Box>
          <Box sx={{ position: 'absolute', top:0, right: 0, left: 0, zIndex: 99, mx: 'auto', textAlign: 'center'}}>
            <Typography variant='h3' sx={{ color: 'white',mt:'4rem'}}>Wir leben die Energiewende.</Typography>
          
          <Box sx={{mt:'50px',display:'inline-block',}}>
            <a href='#' className='atag'>
              <Box className='boxColor'></Box>
              <Box className='boxTypo'>
                <Typography variant='body1' className='typo'>Kontakt aufnehmen</Typography></Box>

            </a>
          </Box>
          </Box>
        </Box>
      </Box>
    </div>
    </>
  )
}

export default Hero