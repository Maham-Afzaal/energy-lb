import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import logo from "../dataEnergy/logo.svg";
import "./nav.css";
import Compo from "./Compo";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Testing from "./Testing";
import Unternehmen from "./Unternehmen";
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
                   <NavLink to="/karriere"> Karriere &nbsp;
                    <Box className="box1" sx={{ display: "inline-block" }}>
                      <Box className="boxSpa"></Box>
                      <span className="spa">4</span>
                    </Box>
                    </NavLink>
                  </Button>
                
              </Box>
            </Box>
            <Box className='tagButton'>
            <NavLink to="/kontakt" className='atag'>
                <Box className="boxColor"></Box>
                <Box className="boxTypo">
                  <Typography variant="body1" className="typo">
                    Kontakt aufnehmen
                  </Typography>
                </Box>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </div>

      <Routes>
        <Route index path="/" element={<Compo />} />
        <Route path="/karriere" element={<Testing />} />
        <Route path="/kontakt" element={<Unternehmen />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
