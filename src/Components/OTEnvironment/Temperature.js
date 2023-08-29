import React, { useState } from "react";
import "../../Components/OTEnvironment/Temperature.css";
import temp from "../../images/temp1.png";
import weather from "../../images/weather1.png";
import pressurelogo from "../../images/pressurelogo1.png";
import Divider from "@mui/material/Divider";
import DoneIcon from '@mui/icons-material/Done';

const Temperature = () => {
  const [temperature, setTemperature] = useState(20);
  const [humidity, setHumidity] = useState(20);

  const handleIncrease = () => {
    if (temperature < 24) {
      setTemperature((prevTemperature) => prevTemperature + 1);
    }
  };

  const handleDecrease = () => {
    if (temperature > 16) {
      setTemperature((prevTemperature) => prevTemperature - 1);
    }
  };

  const handleIncreaseHumidity = () => {
    if (humidity < 60) {
      setHumidity((prevTemperature) => prevTemperature + 1);
    }
  };

  const handleDecreaseHumidity = () => {
    if (humidity > 10) {
      setHumidity((prevTemperature) => prevTemperature - 1);
    }
  };

  return (
    <>      
        <center>
          <b>OT Environment</b>
        </center>      
      <div class="column1">
        <div          
          style={{ fontSize: "12px", marginTop: "-40px", marginLeft: "40px" }}
        >
          <b>Temperature control</b>
        </div>
        <div style={{ marginTop: "40px", marginLeft: "-220px" }}>
          <img src={temp} height={"50px"} width={"50px"} />
          <p style={{paddingLeft: '40px', fontSize: '20px'}}> <b>{temperature}</b> </p>
          <p style={{ paddingLeft: '30px', paddingTop: '20px' }}>                    
            <b>°C</b>          
        </p>
        </div>        
        <div style={{ marginTop: "40px", border: '3px solid black', borderRadius: '10px', marginRight: '5px'}}>
          <button onClick={handleDecrease} >-</button>
          <span>{temperature}</span>
          <button onClick={handleIncrease} >+</button>
        </div>
      </div>
      <Divider sx={{width: '450px', marginLeft: '20px'}} />
      <div class="column1">
        <div        
          style={{ fontSize: "12px", marginTop: "-40px", marginLeft: "40px" }}
        > 
          <b>Humidity control</b>
        </div>
        <div  style={{ marginTop: "40px", marginLeft: "-220px" }}>
          <img src={weather} height={"50px"} width={"50px"} />
          <p style={{paddingLeft: '40px', fontSize: '20px'}}>
          <b>{humidity}</b>
          </p>
          <p style={{ paddingLeft: '20px', paddingTop: '20px' }}>          
          <span>
            <b>%RH</b>
          </span>
        </p>
        </div>        
        <div  style={{ marginTop: "40px", border: '3px solid black', borderRadius: '10px', marginRight: '5px'}} >
          <button onClick={handleDecreaseHumidity} >-</button>
          <span>{humidity}</span>
          <button onClick={handleIncreaseHumidity} >+</button>
        </div>
      </div>
      <Divider sx={{width: '450px', marginLeft: '20px', Orientation: 'vertical'}}/>
      <div class="column1">
        <div          
          style={{ fontSize: "12px", marginTop: "-40px", marginLeft: "40px" }}
        >
          <b>Differeintal Room Pressure</b>
        </div>
        <div  style={{ marginTop: "40px", marginLeft: "-450px" }}>
          <img src={pressurelogo} height={"50px"} width={"50px"} />
          <p style={{paddingLeft: '35px', fontSize: '20px'}}><b>10</b></p>
          <p style={{ paddingLeft: '35px', paddingTop: '20px' }}>            
            <b>P</b>          
        </p> 
        <Divider orientation="vertical" flexItem style={{marginLeft: '50px'}} />
        <p style={{marginLeft: '75px', marginTop: '-70px'}}><b>Hepa filter</b></p>        
        <DoneIcon style={{backgroundColor: 'green', borderRadius: '50%', height: '40px', width: '40px', marginLeft: '-60px'}}/>             
        </div>               
      </div>
    </>
  );
};

export default Temperature;
