import React, { useState } from "react";
import "./PhonePad.css";
import CallIcon from '@mui/icons-material/Call';
import BackspaceIcon from '@mui/icons-material/Backspace';

const PhonePad = () => {
  const [input, setInput] = useState("0");

  const handleNumberClick = (number) => {
    if (input === "0") {
      setInput(number);
    } else {
      setInput((prevInput) => prevInput + number);
    }
  };

  const handleCallClick = () => {
    alert(`Calling ${input}`);
    setInput("0");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick("7")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>7</button>
          <button onClick={() => handleNumberClick("8")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>8</button>
          <button onClick={() => handleNumberClick("9")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>9</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick("4")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>4</button>
          <button onClick={() => handleNumberClick("5")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>5</button>
          <button onClick={() => handleNumberClick("6")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>6</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick("1")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>1</button>
          <button onClick={() => handleNumberClick("2")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>2</button>
          <button onClick={() => handleNumberClick("3")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>3</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick("*")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>*</button>
          <button onClick={() => handleNumberClick("0")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>0</button>
          <button onClick={() => handleNumberClick("#")} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'}}>#</button>
        </div>        
      </div>
      <div className="button-container">
          <button className="call-button" style={{ backgroundColor: 'green', boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", width: '100px'}} onClick={handleCallClick}>
            <CallIcon />
          </button>
          <button className="delete-button" style={{ backgroundColor: 'red', boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", width: '100px'}} onClick={handleDelete}>
            <BackspaceIcon />
          </button>
        </div>
    </div>
  );
};

export default PhonePad;
 