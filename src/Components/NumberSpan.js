import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const NumberSpan = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber === 30) {
          clearInterval(interval);
          return prevNumber;
        } else {
          return prevNumber + 1;
        }
      });
    }, 100); // Adjust the interval duration as needed (in milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <Typography variant="span">
      {number}
    </Typography>
  );
};

export default NumberSpan;
