//Imports the useState and useEffect hooks
import React, { useState, useEffect } from 'react';

function Clock() {
  // Define state variable 'time' and function to update it
  const [time, setTime] = useState(new Date());

  // Effect to update time every second and clear interval on component unmount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean-up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run only once when the component mounts

  // Format the time including AM/PM
  const hours = time.getHours() > 12 ? (time.getHours() - 12).toString().padStart(2, '0') : time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const amPm = time.getHours() >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`; // Concatenate time and AM/PM

  // Render the Clock component
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>It is {timeString}</h1>
    </div>
  );
}

export default Clock;

