import React, { useState, useEffect, useRef } from "react";
import SaveIcon from "@mui/icons-material/Save";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const countdownRef = useRef(null);
  const [showInputFields, setShowInputFields] = useState(false);

  useEffect(() => {
    setTotalSeconds(hours * 3600 + minutes * 60 + seconds);
    setTimeRemaining(hours * 3600 + minutes * 60 + seconds);

    return () => {
      clearInterval(countdownRef.current); // Clean up the interval on unmount
    };
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (isRunning) {
      countdownRef.current = setInterval(() => {
        setTimeRemaining((prevTimeRemaining) =>
          Math.max(prevTimeRemaining - 1, 0)
        );
      }, 1000); // Update every second
    } else {
      clearInterval(countdownRef.current);
    }

    return () => {
      clearInterval(countdownRef.current); // Clean up the interval on unmount or when isRunning changes
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalSeconds(hours * 3600 + minutes * 60 + seconds);
    setTimeRemaining(hours * 3600 + minutes * 60 + seconds);
  };

  const handleToggleInputFields = () => {
    setShowInputFields((prevState) => !prevState);
  };

  const handleSaveInput = () => {
    setShowInputFields(false); // Close the input fields after the input is saved
  };

  return (
    <div>
      <p style={{fontSize: '12px'}}><b>Anesthesia Countdown</b></p>
      {showInputFields ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          <label>
            Hours:
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              onBlur={handleSaveInput}
            />
          </label>
          <br />
          <label>
            Minutes:
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              onBlur={handleSaveInput}
            />
          </label>
          <br />
          <label>
            Seconds:
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
              onBlur={handleSaveInput}
            />
          </label>
          <br />
        </div>
      ) : null}
      <p style={{fontSize: '50px', marginTop: '-5px'}}>
        {String(Math.floor(timeRemaining / 3600)).padStart(2, "0")}:
        {String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, "0")}:
        {String(timeRemaining % 60).padStart(2, "0")}
      </p>
      <div className="button-group" style={{marginTop: '-30px'}}>
        <button className="button" onClick={handleToggleInputFields} style={{backgroundColor: '#00FFFF'}}>
          {showInputFields ? <SaveIcon /> : <AccessAlarmIcon />}
        </button>
        <button className="button" onClick={handleStartStop} style={{backgroundColor: '#00FFFF'}}>
          {isRunning ? <StopIcon /> : <PlayArrowIcon />}
        </button>        
        <button className="button" onClick={handleReset} style={{backgroundColor: '#00FFFF'}}>
        <RestartAltIcon />
        </button>
      </div> 
    </div>
  );
};

export default CountdownTimer;
