import React from "react";

const Cart = () => {
  return (
    <>
      <div className="absolute right-[30px] top-[100px] rounded-md w-[350px] h-[225px] bg-white shadow-sm shadow-gray-400  flex flex-col justify-center items-center z-5">
        <div className="w-[80%] py-[10px] mb-[10px] border-b-[1.5px] border-gray-200 font-bold">
          <h3>Cart</h3>
        </div>
        <div className="hidden flex items-center justify-between gap-4 my-[15px] leading-6">
          <div className="w-[50px] h-[50px] rounded-md overflow-hidden ">
            <img
              src="images/image-product-1.jpg"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="cart-desc">
            <b className="text-[#68707d]">Fall Limited Edition Sneakers</b>
            <p>
              <span className="text-[#68707d]">$125.00</span>
              <span className="text-[#68707d]">
                x <span id="mul"></span>{" "}
              </span>
              <b id="total">
                $<span id="total_price"></span>
              </b>
            </p>
          </div>
          <div className="cart-delete">
            <img src="images/icon-delete.svg" alt="" id="delete-icon" />
          </div>
        </div>
        <div className="my-[40px] mx-auto text-gray-500 ">
          <h45>Your cart is empty</h45>
        </div>
        <button className="hidden w-[85%] h-[45px] mt-2 rounded-md font-bold bg-[#ff7d1a] hover:bg-[#ed9654] cursor-pointer">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
