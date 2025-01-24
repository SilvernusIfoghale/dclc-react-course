import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Card from "../component/Card";
import FetchUsers from "../component/FetchUsers";

const Home = () => {
  const location = useLocation();
  // console.log(location);
  const [count, setCount] = useState(0);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "black" : "",
      textDecoration: "none",
    };
  };
  return (
    <>
      <nav className="bg-slate-200 py-4 flex-wrap">
        <ul className="flex gap-5   flex-wrap ">
          <Link to="/product">Product</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/comment"> Comments</Link>
          <li></li>
          <Link to="/form">Form</Link>
          <Link to="/counter">Redux-Counter</Link>
          <Link to="/form-yup">FormYup</Link>
          <Link to="/form-formik-yup">FormFormikYup</Link>
          <Link to="/react-hook-form">ReactHookForm</Link>
          <Link to="/post">Redux-Posts</Link>

          <li>
            <NavLink
              state="Hi, from state"
              to="/book"
              style={({ isActive }) => {
                return isActive ? { fontWeight: "bold" } : {};
              }}
            >
              Book List
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" style={navLinkStyles}>
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
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
