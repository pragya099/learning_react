// import { useState } from "react";
// import "./App.css";
// import Card1 from "../components/card1";
// import { UserContext } from "./UserContext";


//   const UserContext=CreateContext();
// function App() {
//   //step-1 create context

//   //step2 wrap all the child inside a provider
//   //step3 pass value
//   //step4 consumer k andar jake consume kr lo 

//  const [user,setUser]=useState({name:"love"})
  

//   return (
   
//     <>
//   <UserContext.Provider value={"user"} >
//       <card1/>
//   </UserContext.Provider>

//     </>
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";
import Card1 from "../components/card1";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState({
    name: "love"
  });

  return (
    <UserContext.Provider value={user}>
      <Card1 />
    </UserContext.Provider>
  );
}

export default App;

