import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold ">Hello world</h1>
        {location.state}
      </div>
    </>
  );
};

export default Home;
