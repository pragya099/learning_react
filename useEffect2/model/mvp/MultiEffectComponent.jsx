import React, { useState, useEffect } from "react";

const MultiEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Effect 1: runs whenever count changes
  useEffect(() => {
    console.log("Counter changed:", count);
  }, [count]);

  // Effect 2: timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <h2>Seconds: {seconds}</h2>
    </div>
  );
};

export default MultiEffectComponent;


/**
 * Question 2 — Multiple useEffect
Create a React component using multiple useEffect hooks.
Maintain a counter that increases when the user clicks an Increment button.
Display a message in the console whenever the counter changes.
Create a timer that increases the seconds every 1 second.
Clean up the timer when the component is unmounted
 * 
 * 
 */
