import React, { useContext } from "react";
import { AppContext } from "./ContextData";

const User = () => {
  const name = useContext(AppContext);
  console.log(name);
  return (
    <>
      <h1>User</h1>
      <p>Username: {name} </p>
      <p>Password: </p>
    </>
  );
};

export default User;
