import React, { useContext } from "react";
import { UserContext } from "../src/App";

const User3 = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h2>User3:{user.name}</h2>
    </div>
  )
}

export default User3
