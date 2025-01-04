import React, { createContext, useState } from "react";
import User from "./User";

export const AppContext = createContext(null);
const ContextData = () => {
  const [name, setName] = useState("John Doe");
  console.log(name);
  return (
    <>
      <AppContext.Provider value={name}>
        <User />
      </AppContext.Provider>
    </>
  );
};

export default ContextData;
