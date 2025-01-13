import React, { useContext, useState, useEffect } from "react";
import { pageImg } from "../imageDb/db";
import { Link } from "react-router";
import Cart from "./Cart";
import { CountContext } from "../context/CountContext";
import { TotalContext } from "../context/TotalContext";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [cartInfo, setCartInfo] = useState(false);
  const { count } = useContext(CountContext);
  const { total } = useContext(TotalContext);
  const [countValue, setCountValue] = useState();

  useEffect(() => {
    let value = total / 125;
    setCountValue(value);
    console.log(total);
  }, [total]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="flex h-[80px] px-5 items-center border-b-2 border-[#e4e5e7] sm:mb-[30px] ">
        <div className=" flex items-center justify-between w-full">
          <div className="flex items-center ">
            {/* left-section- logo & link  */}
            <div className="mt-[4px]  mr-[20px] cursor-pointer md:hidden hover:scale-110 duration-500 ease-in-out transition-all">
              <img
                src={pageImg.menuImg}
                onClick={handleToggle}
                alt="toggle-icon"
                id="open-btn"
              />
            </div>
            <div className="mr-10 w-32">
              <img
                src={pageImg.logoImg}
                alt="sneaker-logo"
                className="w-full object-contain hover: cursor-pointer"
              />
            </div>
            <div>
              <ul
                className={`z-10 md:flex md:gap-4 md:relative md:pt-0 md:p-0 md:text-gray-500  absolute left-0 top-0 bg-white p-10 pt-16 font-semibold leading-loose md:leading-none border-r-2 h-full md:h-none md:border-r-0   ${
                  toggle ? "visible" : "hidden"
                }`}
              >
                <li className="md:hidden absolute top-5 cursor-pointer hover:scale-110 duration-500 ease-in-out transition-all">
                  <img
                    src={pageImg.closeImg}
                    alt="close-btn"
                    onClick={handleToggle}
                  />
                </li>
                <li>
                  <Link className="hover:border-b-2 hover:border-[#ff7d1a] hover:text-gray-700 md:pb-7">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link className="hover:border-b-2 hover:border-[#ff7d1a] hover:text-gray-700 md:pb-7">
                    Men
                  </Link>
                </li>
                <li>
                  <Link className="hover:border-b-2 hover:border-[#ff7d1a] hover:text-gray-700 md:pb-7">
                    Women
                  </Link>
                </li>
                <li>
                  <Link className="hover:border-b-2 hover:border-[#ff7d1a] hover:text-gray-700 md:pb-7 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:border-b-2 hover:border-[#ff7d1a] hover:text-gray-700 md:pb-7">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-5 relative">
            {/*  cart and profile  */}
            <div className="">
              {countValue > 0 && (
                <div
                  className={`${
                    total > 124 ? "visible" : "hidden"
                  } flex absolute top-1 left-2 items-center justify-center font-bold text-white w-6 h-[0.9rem] rounded-md bg-[#ff7d1a] text-xs  `}
                >
                  {countValue}
                </div>
              )}
              <img
                src={pageImg.cartImg}
                alt="cart-icon"
                className="hover:cursor-pointer"
                onClick={() => setCartInfo(!cartInfo)}
              />
            </div>

            <div className="cursor-pointer w-[40px] rounded-full border-2 border-transparent hover:border-2 hover:border-[#ff7d1a]">
              <img
                src={pageImg.profileImg}
                alt="profile-image"
                id="img"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </nav>
      {cartInfo && <Cart />}
    </>
  );
};

export default Nav;
