import React, { useState, useEffect } from "react";
import "../Components/style.css";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
      }, 10); // Update every 10 milliseconds (0.01 seconds)
    }

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount or when isRunning changes
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsRemaining = milliseconds % 1000;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <p style={{fontSize: '12px'}}><b>Operation Time</b></p>
      <p style={{fontSize: '50px', marginTop: '-5px'}}>{formatTime(elapsedTime)}</p>
      <div className="button-group" style={{marginTop: '-30px'}}>
        <button className="button" onClick={handleStartStop}>          
          {isRunning ? <StopIcon /> : <PlayArrowIcon />}
        </button>
        <button className="button" onClick={handleReset}>
          <RestartAltIcon />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
