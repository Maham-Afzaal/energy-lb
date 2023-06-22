import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './pg.css';

const PageSection = () => {
   return (
      <div style={{ backgroundColor: '#051218', position: 'relative' }}>
         <Box sx={{ px: '24px' }}>
            <Box>
               <Box className='monowrapper'>
                  <Box className='boxMonogram'></Box>
               </Box>

               <Box className='Bwrapper'>
                  <Box className='wrapp'>
                     <a href='#' className='atag' style={{marginTop:'18px'}}>
                        <Box className='boxColor'></Box>
                        <Box className='boxTypo'>
                           <Typography variant='body1' className='typo' >Kontakt aufnehmen</Typography>
                        </Box>
                     </a>
                     <a href='#' className='atag'>
                        <Box className='boxColor'></Box>
                        <Box className='boxTypo'>
                           <Typography variant='body1' className='typo' >Kontakt aufnehmen</Typography>
                        </Box>
                     </a>
                     <a href='#' className='atag'>
                        <Box className='boxColor'></Box>
                        <Box className='boxTypo'>
                           <Typography variant='body1' className='typo' >Kontakt aufnehmen</Typography>
                        </Box>
                     </a>
                  </Box>
                  <Box className='boxRight'>
                     <Box >
                        <Typography variant='h3' sx={{ color: 'white' }}>Unsere Dienstleistungen.</Typography>
                        <Typography variant='body1' sx={{ color: 'white' }}>Wir leisten das volle Spektrum an erneuerbaren Energiekonzepten aus einer Hand. Als führender Fullservice-Anbieter bieten wir sämtlich Dienstleistungen inhouse an. Wir beschäftigen eigene Elektriker, Dachdecker, Sanitärinstallateure sowie Gerüstbauer und können dadurch auf Subunternehmer verzichten. Dadurch bieten wir unseren Kunden das komplette Know-how mit reibungslosen Abläufen ohne Wartezeiten.</Typography>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>



      </div >
   )
}

export default PageSection