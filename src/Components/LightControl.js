import React, { useState } from "react";
import "../Components/style.css";

const LightControl = () => {
  // const [isOn, setIsOn] = useState(false);
  // const [isOn2, setIsOn2] = useState(false);
  // const [isOn3, setIsOn3] = useState(false);

  // const handleToggle = () => {
  //   setIsOn((prevState) => !prevState);    
  // };

  // const handleToggle2 = () => {
  //   setIsOn2((prevState2) => !prevState2);    
  // }

  // const handleToggle3 = () => {
  //   setIsOn3((prevState3) => !prevState3);
  // }

  return (
    <>
      <div class="button r" id="button-1">
          <input type="checkbox" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
    </>
  );
};

export default LightControl;
