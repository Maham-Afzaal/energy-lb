import React from "react";
import Box from "@mui/material/Box";
import ecsclip from "../dataEnergy/ellipse.svg";
import b1 from "../dataEnergy/b1.png";
import b2 from "../dataEnergy/b2.png";
import b3 from "../dataEnergy/b3.png";
import b4 from "../dataEnergy/b4.png";
import { Typography } from "@mui/material";
import "./unter.css";

const Unternehmen = () => {
  return (
    <div>
      <Box className="page-padding">
        <Box className="medC">
          <Box className="Left">
          <Box className="boxLeft">
            <Box
              className="ab"
              sx={{ position: "absolute", top: "-90px", left: "-100px" }}
            >
              <img src={ecsclip} />
            </Box>
            <Box className="rr" sx={{ position: "relative" }}>
              <Typography variant="h3" sx={{color:'white'}}>Kompetenz aus einer Hand.</Typography>
              <Typography variant="p" sx={{color:'#c1c0b4'}}>
                Unser Alleinstellungsmerkmal ist die kompetente Umsetzung aus
                einer Hand durch unsere qualifizierten Mitarbeiter.
              </Typography>
            </Box>
          </Box>
          </Box>
          <Box className="boxRight">
            <Box className="quo">
              <Box className="quatro-item">
                <img src={b1} alt="" width={87} height={100}/>
                <h5>Kompetenz.</h5>
                <p>
                  Unser professionelles Team macht uns zu einem der besten
                  Fullservice-Anbieter.
                </p>
              </Box>
              <Box className="quatro-item">
                <img src={b2} alt="" width={100} height={81}/>
                <h5>Werthaltigkeit.</h5>
                <p>
                  Wir bieten Ihnen maximale Langlebigkeit durch eine
                  fachgerechte Installation.
                </p>
              </Box>
              <Box className="quatro-item">
                <img src={b3} alt="" width={100} height={81}/>
                <h5>Inhouse.</h5>
                <p>
                  Wir setzen auf geschultes und ausgewähltes Personal anstatt
                  auf Subunternehmen.
                </p>
              </Box>
              <Box className="quatro-item">
                <img src={b4} alt="" width={100} height={100}/>
                <h5>Schnelligkeit.</h5>
                <p>
                  Unsere Kunden schätzen die reibungslose und schnelle Umsetzung
                  ohne Wartezeiten.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Unternehmen;
