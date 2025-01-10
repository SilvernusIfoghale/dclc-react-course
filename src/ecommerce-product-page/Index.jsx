import React from "react";
import Nav from "./component/Nav";
import Product from "./component/Product";

const Index = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[90%] mx-5">
          <Nav />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Index;
