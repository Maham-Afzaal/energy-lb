import { Box } from "@mui/material";
import React from "react";
import "./circle.css";
import plus from '../dataEnergy/plus.svg'
import insta from '../dataEnergy/instagram.svg';
import fb from '../dataEnergy/facebook.svg';
import email from '../dataEnergy/email.svg';
import link from '../dataEnergy/linkedin.svg';
import tik from '../dataEnergy/tiktok.svg';
import you from '../dataEnergy/youtube.svg';
const Circles = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Box className="Wrapper">
        <Box className="circleWrapper">
          <Box className="circle1"></Box>
          <Box className="circle2"></Box>
          <Box className="circle3"></Box>
          <Box className="circle4"></Box>
          <Box className="social-icons">
            <a href="#" target="_blank" className="social-icon icon1">
              <div className="color-bgr"></div>
              <div className="icon-content">
                <img src={insta} alt="" />
              </div>
            </a>
            <a href="#" target="_blank" className="social-icon icon2">
              <div className="color-bgr"></div>
              <div className="icon-content">
                <img src={fb} alt="" />
              </div>
            </a>
            <a href="#" target="_blank" className="social-icon icon3">
              <div className="color-bgr"></div>
              <div className="icon-content">
                <img src={email} alt="" />
              </div>
            </a>
            <a href="#" target="_blank" className="social-icon icon4">
              <div className="color-bgr"></div>
              <div className="icon-content">
                <img src={link} alt="" />
              </div>
            </a>
            <a href="#" target="_blank" className="social-icon icon5">
              <div className="color-bgr"></div>
              <div className="icon-content">
                <img src={tik} alt="" />
              </div>
            </a>
            <a href="#" target="_blank" className="social-icon icon6">
              <div className="color-bgr"></div>
              <div className="icon-content">
                <img src={you} alt="" />
              </div>
            </a>

            <Box class="ring ring5">
              <img src={plus} alt=""/>

              </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Circles;
