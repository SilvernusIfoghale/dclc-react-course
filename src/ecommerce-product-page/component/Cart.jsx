import React, { useContext } from "react";
import { pageImg } from "../imageDb/db";
import { thumbnails } from "../imageDb/db";
import { TotalContext } from "../context/TotalContext";
import { CountContext } from "../context/CountContext";

const Cart = ({ countValue }) => {
  const { total, setTotal } = useContext(TotalContext);
  const { setCount } = useContext(CountContext);
  const handleReset = () => {
    setCount(0);
    setTotal(0);
  };
  return (
    <>
      <div className="absolute right-2 sm:right-9 top-[100px] rounded-md w-[350px] h-[225px] bg-white shadow-sm shadow-gray-400  flex flex-col justify-center items-center z-20">
        <div className="w-[80%] py-[10px] mb-[10px] border-b-[1.5px] border-gray-200 font-bold">
          <h3>Cart</h3>
        </div>
        {total > 0 ? (
          <div className="flex  items-center justify-between gap-4 my-[15px] leading-6 ">
            <div className="w-[50px] h-[50px] rounded-md overflow-hidden ">
              <img
                src={thumbnails[0].id}
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div className="cart-desc">
              <b className="text-[#68707d]">Fall Limited Edition Sneakers</b>
              <p>
                <span className="text-[#68707d]">$125.00</span>
                <span className="text-[#68707d]">
                  <span> x </span> <span id="mul"> {countValue} </span>
                </span>
                <b id="total">
                  $<span id="total_price">{total}</span>
                </b>
              </p>
            </div>
            <div className="cart-delete cursor-pointer" onClick={handleReset}>
              <img src={pageImg.iconDelete} alt="" id="delete-icon" />
            </div>
          </div>
        ) : (
          <div className=" my-[40px] mx-auto text-gray-500 ">
            <h5>Your cart is empty</h5>
          </div>
        )}
        {total > 0 && (
          <button className=" w-[85%] h-[45px] mt-2 rounded-md font-bold bg-[#ff7d1a] hover:bg-[#ed9654] cursor-pointer">
            Checkout
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
