import React from "react";
import Box from "@mui/material/Box";
import s1 from "../dataEnergy/s1.jpg";
import s2 from "../dataEnergy/s2.jpg";
import s3 from "../dataEnergy/s3.jpg";
import s4 from "../dataEnergy/s4.jpg";
import s5 from "../dataEnergy/s5.jpg";
import s6 from "../dataEnergy/s6.jpg";
import s7 from "../dataEnergy/s7.jpg";
import "./te.css";
import { Typography } from "@mui/material";

const Slider = () => {
  return (
    <div style={{ overflow: "hidden", height: "auto", backgroundColor: "#051218" }}>
      <Box display='flex' justifyContent='center' alignContent='center'>
        <Typography variant="h3" sx={{ color: "white", mb: "10px" }}>
          Slider Show
        </Typography>
      </Box>
      <Box className="slideshow-container">
        <Box className="sliderWrapper">
          <Box className="slide">
            <Box className="boxslider">
              <img src={s1} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s3} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="smallSlide">
              <img src={s2} className="imgS1" />
            </Box>
            <Box className="smallSlide">
              <Box className="boxContent">
                <Typography variant="body1" sx={{ color: "green" }}>
                  Deine Benefits:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Wir zahlen 1.000 € mehr (!) Reichlich Urlaubstage Keine
                  Montagearbeit Eigener Firmenwagen Unbefristeter Vertrag
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s4} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="smallSlide">
              <Box className="boxContent">
                <Typography variant="body1" sx={{ color: "green" }}>
                  Deine Benefihghaghdshts:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Eigener Firmenwagen Unbefristeter Vertrag
                </Typography>
              </Box>
            </Box>
            <Box className="smallSlide">
              <img src={s5} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s6} className="imgS1" />
            </Box>
          </Box>
          <Box className="slide">
            <Box className="boxslider">
              <img src={s7} className="imgS1" />
            </Box>
          </Box>
        </Box>

        {/* <Box className="sliderWrapper">
          <Box className="slide">
            <Box className="boxslider">
              <img src={s1} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s3} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="smallSlide">
              <img src={s2} className="imgS1" />
            </Box>
            <Box className="smallSlide">
              <Box className="boxContent">
                <Typography variant="body1" sx={{ color: "green" }}>
                  Deine Benefits:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Wir zahlen 1.000 € mehr (!) Reichlich Urlaubstage Keine
                  Montagearbeit Eigener Firmenwagen Unbefristeter Vertrag
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s4} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="smallSlide">
              <Box className="boxContent">
                <Typography variant="body1" sx={{ color: "green" }}>
                  Deine Benefihghaghdshts:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Eigener Firmenwagen Unbefristeter Vertrag
                </Typography>
              </Box>
            </Box>
            <Box className="smallSlide">
              <img src={s5} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s6} className="imgS1" />
            </Box>
          </Box>
          <Box className="slide">
            <Box className="boxslider">
              <img src={s7} className="imgS1" />
            </Box>
          </Box>
        </Box> */}
         <Box className="sliderWrapper">
          <Box className="slide">
            <Box className="boxslider">
              <img src={s1} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s3} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="smallSlide">
              <img src={s2} className="imgS1" />
            </Box>
            <Box className="smallSlide">
              <Box className="boxContent">
                <Typography variant="body1" sx={{ color: "green" }}>
                  Deine Benefits:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Wir zahlen 1.000 € mehr (!) Reichlich Urlaubstage Keine
                  Montagearbeit Eigener Firmenwagen Unbefristeter Vertrag
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s4} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="smallSlide">
              <Box className="boxContent">
                <Typography variant="body1" sx={{ color: "green" }}>
                  Deine Benefihghaghdshts:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Eigener Firmenwagen Unbefristeter Vertrag
                </Typography>
              </Box>
            </Box>
            <Box className="smallSlide">
              <img src={s5} className="imgS1" />
            </Box>
          </Box>

          <Box className="slide">
            <Box className="boxslider">
              <img src={s6} className="imgS1" />
            </Box>
          </Box>
          <Box className="slide">
            <Box className="boxslider">
              <img src={s7} className="imgS1" />
            </Box>
          </Box>
        </Box>


        <Box class="slider-overlay-left"></Box>
        <Box class="slider-overlay-right"></Box>
      </Box>
    </div>
  );
};

export default Slider;
