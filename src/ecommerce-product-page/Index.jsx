import React from "react";
import Nav from "./component/Nav";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import CountContextProvider from "./context/CountContext";
import TotalContextProvider from "./context/TotalContext";

const Index = () => {
  return (
    <>
      <CountContextProvider>
        <TotalContextProvider>
          <div className="flex justify-center ">
            <div className="sm:w-[90%] sm:mx-5">
              <Nav />
              <div className="grid sm:grid-cols-2 place-items-center sm:gap-20 md:gap-0">
                <Product />
                <ProductDetail />
              </div>
            </div>
          </div>
        </TotalContextProvider>
      </CountContextProvider>
    </>
  );
};

export default Index;
