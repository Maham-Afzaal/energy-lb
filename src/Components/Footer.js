import React from "react";
import one from '../dataEnergy/1.png';
import two from '../dataEnergy/2.png';
import t from '../dataEnergy/3.png';
import f from '../dataEnergy/4.png';
const Footer = () => {
  return (
    <div style={{marginTop:'auto',backgroundColor:'black',color:'white'}}>
      <div style={{display: "flex",alignItems:'center',justifyContent: "space-between",gap:'6px 0px',padding:'10px'}}>
        <div>@2023 MahamAfzaal. All Rights Reserved</div>
        <div style={{ display: "flex", gap: "5px",cursor:'pointer' }}>
          <img src={one} alt='' width={30} height={30} />
          <img src={two} alt='' width={30} height={30} />
          <img src={t} alt='' width={30} height={30} />
          <img src={f} alt='' width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
