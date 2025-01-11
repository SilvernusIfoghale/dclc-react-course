import React, { useState } from "react";
import { pageImg } from "../imageDb/db";

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="w-[90%] sm:w-full  md:w-[80%] mb-16 sm:mb-1">
      <article className="max-w-[550px] leading-6 ml-[3%] relative">
        <h5 className="text-sm font-bold pb-4 text-[#68707d]">
          SNEAKER COMPANY
        </h5>
        <h2 className="text-4xl pb-4 font-bold">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-[#68707d] text-sm mb-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="pb-5 flex justify-between sm:block">
          <h3 className="font-bold text-xl">
            $125.00{" "}
            <span className="text-sm bg-black text-white rounded-md py-1 px-2 ml-2 font-semibold">
              50%
            </span>
          </h3>
          <h5 className="text-[#68707d] font-semibold line-through pt-2 text-sm">
            $250.00
          </h5>
        </div>
        <div className="sm:flex gap-4 items-center mt-2 ">
          <div className="flex justify-between sm:w-32 items-center bg-slate-100 px-4 rounded-lg w-full mb-3 sm:mb-0">
            <button
              className="bg-transparent h-10 font-bold cursor-pointer"
              onClick={handleDecrement}
            >
              <img src={pageImg.minus} alt="" />
            </button>
            <button className="cursor-not-allowed font-bold">{count}</button>
            <button onClick={handleIncrement}>
              <img src={pageImg.plus} alt="" />
            </button>
          </div>
          <div className="flex justify-center rounded-lg items-center bg-[#ff7d1a] sm:w-[190px] cursor-pointer hover:bg-[#ed9654] w-full">
            <button className="flex items-center gap-3 py-3">
              <img src={pageImg.cartImg} alt="" className="w-[15px] mr-1" />
              <p className="font-bold text-xs">Add to Cart</p>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductDetail;
