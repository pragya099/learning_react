import { useState } from 'react'
 import './App.css'
import { createContext } from 'react'
import User1 from "../Components/User1"
import User2 from "../Components/User2"
import User3 from "../Components/User3";

export const UserContext = createContext();
function App() {
  const [user,setUser]=useState(
    
  {
         name:"pragya Tiwari"
  }
    
  );
  

  return (
    <>
     <UserContext.Provider value={user}>
   <User1/>
   <User2/>
   <User3/>

    </UserContext.Provider>
      
    </>
  )
}

export default App

