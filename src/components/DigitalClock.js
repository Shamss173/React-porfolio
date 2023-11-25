import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time to display in hh:mm:ss AM/PM format
  const formattedTime = currentTime.toLocaleTimeString([], { 
   hour : '2-digit', 
  minute : '2-digit', 
  second : '2-digit', hour12 : true });

  // Inline style to set the background color to black
  const containerStyle = {
    // backgroundColor: 'black',
    // color: 'red', // Set text color to white for better visibility
    // textAlign: 'center',
    // justifycontent: 'center',
    // padding: '20px',
    // borderRadius: '10px',
    
  };

  return (
    <div style={containerStyle} className="digital-clock-container">
      <h1 className="digital-clock-heading">Digital Clock</h1>
      <p className="digital-clock-time">{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;
