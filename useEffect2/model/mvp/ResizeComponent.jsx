//import React, { useEffect } from 'react'



/**Question 1 — Window Resize

Create a React component using useEffect that
 displays the current browser window width. 
 The width should automatically update whenever 
 the browser window is resized. Also remove the resize 
event listener when the component is unmounted.
 * 
 * 
 */
import { useState, useEffect } from "react";

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
};

export default ResizeComponent;