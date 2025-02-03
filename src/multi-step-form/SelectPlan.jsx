import React, { useContext, useEffect, useState } from "react";
import { InfoContext } from "./context/InfoContext";

const SelectPlan = ({ step, setStep }) => {
  const { plan, setPlan } = useContext(InfoContext);
  const { planType, setPlanType } = useContext(InfoContext);
  const [validate, setValidate] = useState(false);
  const { price, setPrice } = useContext(InfoContext);

  useEffect(() => {
    priceValue();
    setValidate(false);
  }, [plan]);
  useEffect(() => {
    priceValue();
  }, [plan, planType]);

  const handleNext = () => {
    if (!plan) {
      setValidate(true);
    } else {
      setValidate(false);
      setStep(step + 1);
    }
  };
  const priceValue = () => {
    if (planType == 1) {
      if (plan == "Arcade") {
        setPrice(90);
      } else if (plan == "Pro") {
        setPrice(150);
      } else {
        setPrice(120);
      }
    } else {
      if (plan == "Arcade") {
        setPrice(9);
      } else if (plan == "Pro") {
        setPrice(15);
      } else {
        setPrice(12);
      }
    }
  };

  return (
    <>
      <div className="mt-3 sm:mt-7 ml-3 sm:ml-0">
        <div className=" sm:flex justify-between gap-2 mb-7">
          {/* Arcade  */}
          <div
            className={` ${
              plan === "Arcade"
                ? "bg-blue-100 border-multiForm-Purplishblue"
                : "border-multiForm-Lightgray bg-transparent"
            } border-[1.5px] rounded-md p-3 sm:w-24 hover:cursor-pointer hover:border-multiForm-Marineblue w-full flex gap-4 items-center sm:block h-20 sm:h-[9.4rem] xl:w-36`}
            onClick={() => setPlan("Arcade")}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
                  />
                </g>
              </svg>
            </div>
            <div className="sm:mt-7">
              <h2 className="font-bold text-multiForm-Marineblue text-sm">
                Arcade
              </h2>
              {planType == 0 ? (
                <p className="text-multiForm-Coolgray text-sm">$9/mo</p>
              ) : (
                <>
                  <p className="text-multiForm-Coolgray text-sm">$90/yr</p>
                  <p className="font-semibold text-multiForm-Marineblue text-xs">
                    2 months free
                  </p>
                </>
              )}
            </div>
          </div>
          {/* Advanced  */}
          <div
            className={` ${
              plan === "Advanced"
                ? "bg-blue-100 border-multiForm-Purplishblue"
                : "border-multiForm-Lightgray bg-transparent"
            } border-[1.5px] rounded-md p-3 sm:w-24 hover:cursor-pointer hover:border-multiForm-Marineblue w-full flex gap-4 items-center sm:block my-3 sm:my-0 h-20 sm:h-[9.4rem] xl:w-36`}
            onClick={() => setPlan("Advanced")}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle cx="20" cy="20" r="20" fill="#F9818E" />
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
                  />
                </g>
              </svg>
            </div>
            <div className=" sm:mt-7">
              <h2 className="font-bold text-multiForm-Marineblue text-sm">
                Advanced
              </h2>
              {planType == 0 ? (
                <p className="text-multiForm-Coolgray text-sm">$12/mo</p>
              ) : (
                <>
                  <p className="text-multiForm-Coolgray text-sm">$120/yr</p>
                  <p className="font-semibold text-multiForm-Marineblue text-xs">
                    2 months free
                  </p>
                </>
              )}
            </div>
          </div>
          {/* pro  */}
          <div
            className={` ${
              plan === "Pro"
                ? "bg-blue-100 border-multiForm-Purplishblue"
                : "border-multiForm-Lightgray bg-transparent"
            } border-[1.5px] rounded-md p-3 sm:w-24 hover:cursor-pointer hover:border-multiForm-Marineblue w-full flex gap-4 items-center sm:block h-20 sm:h-[9.4rem] xl:w-36`}
            onClick={() => setPlan("Pro")}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle cx="20" cy="20" r="20" fill="#483EFF" />
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
                  />
                </g>
              </svg>
            </div>
            <div className="sm:mt-7 ">
              <h2 className="font-bold text-multiForm-Marineblue text-sm">
                Pro
              </h2>
              {planType == 0 ? (
                <p className="text-multiForm-Coolgray text-sm">$15/mo</p>
              ) : (
                <>
                  <p className="text-multiForm-Coolgray text-sm">$150/yr</p>
                  <p className="font-semibold text-multiForm-Marineblue text-xs">
                    2 months free
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        {validate && (
          <p className="text-red-500 text-xs mt-[-25px] h-3 ">
            Select a plan option*
          </p>
        )}

        <div className="mt-5 text-sm font-bold">
          <div className="flex justify-center items-center gap-1  bg-multiForm-Magnolia">
            <h4 className="text-multiForm-Marineblue">Monthly</h4>
            <div className="relative m-3">
              <input
                type="range"
                name="range"
                id="range"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                min="0"
                max="1"
                step="1"
                className="w-9 h-5 mt-1 appearance-none [&::-webkit-slider-thumb]:appearance-none bg-multiForm-Marineblue rounded-xl p-1 outline-none  [&::-webkit-slider-thumb]:bg-multiForm-Alabaster [&&::-moz-range-thumb]:bg-multiForm-Alabaster [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:rounded-full [&&::-moz-range-thumb]:w-4 [&&::-moz-range-thumb]:h-4 [&&::-moz-range-thumb]:rounded-full [&&::-moz-range-thumb]:border-none hover:cursor-pointer"
              />
            </div>
            <h4 className="text-multiForm-Coolgray">Yearly</h4>
          </div>
        </div>

        <div>
          <div className="bg-white left-0 right-0 h-24 absolute bottom-0 sm:static sm:bg-transparent ">
            <button
              onClick={() => setStep(step - 1)}
              type="submit"
              className=" absolute  bottom-5 left-10 sm:left-[17rem] lg:left-72 xl:left-96 mt-4 px-4 py-3 rounded-md flex place-self-end "
            >
              <p className="text-xs font-bold text-multiForm-Coolgray hover:cursor-pointer hover:scale-110 duration-700 hover:text-multiForm-Marineblue">
                Go Back
              </p>
            </button>
            <button
              onClick={handleNext}
              type="submit"
              className="bg-multiForm-Marineblue absolute  bottom-5 right-10 sm:right-16 mt-4 px-4 py-3 rounded-md flex place-self-end hover:bg-multiForm-Purplishblue"
            >
              <p className="text-xs text-multiForm-Lightblue">Next Step</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
