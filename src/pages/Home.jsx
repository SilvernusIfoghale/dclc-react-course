import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../component/Card";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container">
        s<h1 className="text-3xl font-bold ">Hello world</h1>
        {location.state}
        <Card
          color="green"
          title="First"
          text="Here is some random text vary hazard..."
          emoji="☺️"
          bgColor="text-purple-400"
        >
          <p color="blue"> Include some items in this body section</p>
        </Card>
        <Card
          color="green"
          title="First"
          text="Here is some random text vary hazard..."
          emoji="☺️"
          bgColor="text-purple-400"
        >
          <p color="blue"> Include some items in this body section</p>
        </Card>
      </div>
    </>
  );
};

export default Home;
