import React, { useState, useEffect } from 'react';

export default function Timer() {
  // Set the initial values for days, hours, minutes, and seconds
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(56);

  useEffect(() => {
    // Function to update the countdown values
    const updateCountdown = () => {
      // Decrease seconds by 1
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 59));

      // Check if seconds are 0, decrease minutes by 1
      if (seconds === 0) {
        setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 59));

        // Check if minutes are 0, decrease hours by 1
        if (minutes === 0) {
          setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : 23));

          // Check if hours are 0, decrease days by 1
          if (hours === 0) {
            setDays((prevDays) => (prevDays > 0 ? prevDays - 1 : 0));
          }
        }
      }
    };

    // Update the countdown every 1 second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div>
      <div style={{backgroundColor:'pink', color:'black',marginTop:"0.5rem"}}><h1 style={{fontFamily:'serif'}}><b>50% off on every food items</b></h1></div>
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col" >
          <span className="countdown font-mono text-4xl">{days}</span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-4xl">{hours}</span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-4xl">{minutes}</span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-4xl">{seconds}</span>
          sec
        </div>
      </div>
    </div>
  );
}
