import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentDate = new Date().toDateString();

  useEffect(() => {
    // Function to update the current time every second
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div>
      <p style={{ fontSize: '12px' }}><b>Time & Date</b></p>
      <p style={{ fontSize: '50px', marginTop: '-5px'}}>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
      <p style={{fontSize: '30px', marginTop: '-35px'}}><b>{currentDate}</b></p>
    </div>
  );
};

export default CurrentTime;
