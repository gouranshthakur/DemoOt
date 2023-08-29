import React from "react";
import "./Alarmgas.css"; // Make sure to create this CSS file
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Alarmgas() {
  return (
    <>
      <center><b> Medical Gas Alarm </b></center>
      <div className="div-container">
        <div className="div-item"> 
            <p style={{fontSize: '10px'}}><b>O2</b></p>
            <CheckCircleIcon sx={{color: 'green'}}/>
            <p style={{fontSize: '10px'}}><b>Ok</b></p> 
        </div>
        <div className="div-item">
            <p style={{fontSize: '10px'}}><b>N2O</b></p>
            <CheckCircleIcon sx={{color: 'green'}}/>
            <p style={{fontSize: '10px'}}><b>Ok</b></p>
        </div>
        <div className="div-item">
        <p style={{fontSize: '10px'}}><b>CO2</b></p>
            <CheckCircleIcon sx={{color: 'green'}}/>
            <p style={{fontSize: '10px'}}><b>Ok</b></p>
        </div>
        <div className="div-item">
        <p style={{fontSize: '10px'}}><b>AIR4</b></p>
            <CheckCircleIcon sx={{color: 'green'}}/>
            <p style={{fontSize: '10px'}}><b>Ok</b></p>
        </div>
        <div className="div-item">
        <p style={{fontSize: '10px'}}><b>AIR7</b></p>
            <CheckCircleIcon sx={{color: 'green'}}/>
            <p style={{fontSize: '10px'}}><b>Ok</b></p>
        </div>
        <div className="div-item">
        <p style={{fontSize: '10px'}}><b>VACCUM</b></p>
            <CheckCircleIcon sx={{color: 'green'}}/>
            <p style={{fontSize: '10px'}}><b>Ok</b></p>
        </div>
      </div>
    </>
  );
}

export default Alarmgas;
