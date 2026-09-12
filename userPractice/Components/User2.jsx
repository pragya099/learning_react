import React, { useContext } from "react";
import { UserContext } from "../src/App";

const User2 = () => {
    const user = useContext(UserContext);
  return (
    <div>
  <h2>User2:{user.name}</h2>
  
    </div>
  )
}

export default User2
