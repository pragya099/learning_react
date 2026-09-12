import React, { useContext } from "react";
import { UserContext } from "../src/UserContext";

const Card1 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {user.name}
    </div>
  );
};

export default Card1;
