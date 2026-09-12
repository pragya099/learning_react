import React, { useContext } from "react";
import { UserContext } from "../src/App";
const User1 = () => {
     const user = useContext(UserContext);
  return (
    <div>
       <h2>User 1: {user.name}</h2>
    </div>
  )
}

export default User1
