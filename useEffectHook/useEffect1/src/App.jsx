import React, { useState } from 'react';
import NewOne from '../../components/NewOne';

function App() {

  const [show, setShow] = useState(true);

  return (
    <>



  
     .// {/* <button onClick={() => setShow(!show)}>
        Remove NewOne
      </button>

     // {show && <NewOne />} */}
    </>
  );
}

export default App;















// import { useState, useEffect } from 'react'


// function App() {
//   const [count, setCount] = useState(0)
//   const [total,setTotal]=useState(0);
// //variante one
//   // useEffect(() => {
//   //   alert("Effect")
//   // })
//   //!variante two
// //   useEffect(()=>{
// //        alert("i will render only once means first loading");

// //  return()=>{

// //  }
// //   } ,[]);
// //   //!variante three
// //   useEffect(()=>{
// //        alert("i will render every time when count updated");

// //  return()=>{
//      //alert("unmounted funtion")
// //  }
// //   } ,[count]);  it will onlyfirst render
// //!4th variant
// //   useEffect(()=>{
// //        alert("i will render every time when count updated");

// //  return()=>{
// //     
// //  }
// //   } ,[count,total]);
// // //!5th type
// //  useEffect(()=>{
// //        alert("i will render every time when count updated");

// //  return()=>{
// //      alert("unmounted funtion")
// //  }
// //   } ,[count,total]);




//   return (
//     <>

     
//       {/* <p>Hello ji</p>

//       <button onClick={() => setCount(count + 1)}>
//         {count}
//       </button>
//       <br />
//       <br />
//       <p>Pragya ji </p>

//       <button onClick={() => setTotal(total + 1)}>
//         {total}
//       </button> */}
//     </>
//   )
// }

// export default App