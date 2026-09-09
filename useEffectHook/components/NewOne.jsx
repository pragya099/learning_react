import React, { useState, useEffect } from 'react'

const NewOne = () => {

  const [count, setCount] = useState(0);

//   useEffect(() => {

//     alert("Component Mounted");

//     return () => {
//       console.log("Cleanup");
//     }

//   }, []);


  useEffect(() => {

    const interval = setInterval(() => {
      console.log("Hello");
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval("stop hehehe");
      clearInterval(interval);
    };

  }, []);


  return (
    <div>
      I am timer function: {count}
    </div>
  )
}

export default NewOne
