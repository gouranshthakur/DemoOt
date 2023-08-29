import React, { useEffect, useState } from "react";
import "../Components/style.css";
import StopWatch from "./StopWatch";
import CountdownTimer from "./CountdownTimer";
import ToggleSwitch from "./LightControl/ToggleSwitch";
import CurrentTime from "./CurrentTime";
import Index from "./OTEnvironment";
import PhonePad from "./Phone/PhonePad";
import Alarmgas from "./GasAlarm/Alarmgas";

const Time = () => {
  return (
    <>
      {/*
      <div class="Row">
        
      </div> */}
      {/* this is parent div   */}
      <div class="parent_div">
        {/* this are child div's */}
        <div class="child_1">
          <div class="Row">
            <div class="Column" style={{ backgroundColor: "rgb(72, 255, 0)" }}>
              <center>
                <CurrentTime />
              </center>
            </div>
            <div class="Column" style={{ backgroundColor: "yellow" }}>
              <center>
                <StopWatch />
              </center>
            </div>
            <div class="Column" style={{ backgroundColor: "#00FFFF" }}>
              <center>
                <CountdownTimer />
              </center>
            </div>
          </div>
        </div>
        <div class="child_2">          
          {/* <div class="Row"> */}
            <div class='child_2_1'><ToggleSwitch /></div>
            <div class='child_2_2'><Index /></div>
            <div class='child_2_3'><PhonePad /></div>
          {/* </div> */}
          <div class="child_3"><Alarmgas /></div>
        </div>        
      </div>
    </>
  );
};

export default Time;
