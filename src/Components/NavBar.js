import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import logo from "../dataEnergy/logo.svg";
import "./nav.css";
import Hero from "./Hero";
import Slider from "./Slider";
import PageSection from "./PageSection";
import Circles from "./Circles";
import Compo from "./Compo";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Testing from "./Testing";
const NavBar = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#051218", m: 0, p: 0 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#051218", m: 0, py: "10px" }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box component="img" src={logo} width={150} height={30}></Box>
            </Box>
            <Box>
              <Box>
                
                  <Button
                    sx={{ color: "#96958d", "&:hover": { color: "white" } }}
                  >
                    <NavLink to="/">Home</NavLink>
                  </Button>
                
               
                  <Button
                    sx={{ color: "#96958d", "&:hover": { color: "white" } }}
                  >
                   <NavLink to="/testing"> Karriere &nbsp;
                    <Box className="box1" sx={{ display: "inline-block" }}>
                      <Box className="boxSpa"></Box>
                      <span className="spa">4</span>
                    </Box>
                    </NavLink>
                  </Button>
                
              </Box>
            </Box>
            <Box>
              <a href="#" className="atag">
                <Box className="boxColor"></Box>
                <Box className="boxTypo">
                  <Typography variant="body1" className="typo">
                    Kontakt aufnehmen
                  </Typography>
                </Box>
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </div>

      <Routes>
        <Route index path="/" element={<Compo />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
