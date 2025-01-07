import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../component/Card";
import FetchUsers from "../component/FetchUsers";

const Home = () => {
  const location = useLocation();
  // console.log(location);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="m-5 border-2 p-5 text-center w-96">
        <FetchUsers />
      </div>
      <div className="m-5 border-2 p-5 text-center w-96">
        <h1 className="font-bold text-3xl mb-3">{count}</h1>
        <button
          className="bg-blue-400 text-white py-2 px-4 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-blue-400 text-white py-2 px-4 mx-3 rounded-md"
          onClick={() => setCount((currentState) => (currentState -= 1))}
        >
          Decrement
        </button>
        <button
          className="bg-red-400 text-white py-2 px-4 rounded-md"
          onClick={() => setCount((currentState) => (currentState = 0))}
        >
          Reset
        </button>
      </div>
      <div className="container flex mt-5">
        {/* <h1 className="text-3xl font-bold ">Hello world</h1> */}
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
