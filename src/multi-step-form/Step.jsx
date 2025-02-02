import React, { useContext } from "react";
import { InfoContext } from "./context/InfoContext";

const Step = () => {
  const { step, setStep } = useContext(InfoContext);
  return (
    <>
      <div className="bg-image w-full h-[150px] sm:h-full sm:min-w-[200px] sm:w-[30%] sm:rounded-lg sm:pl-8 sm:pt-8 text-white text-sm flex gap-5 justify-center sm:block">
        <div className="flex gap-4 items-center mb-5">
          <div
            className={` ${
              step === 1 && "bg-multiForm-Lightblue  text-black "
            } w-7 h-7 rounded-full flex items-center justify-center border-multiForm-Lightgray border-2`}
          >
            <span>1</span>
          </div>

          <div className="hidden sm:block">
            <p className="text-multiForm-Coolgray">STEP 1</p>
            <p className="text-multiForm-Magnolia">YOUR INFO</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-5">
          <div
            className={` ${
              step === 2 && "bg-multiForm-Lightblue  text-black "
            } w-7 h-7 rounded-full flex items-center justify-center border-multiForm-Lightgray border-2`}
          >
            <span className="text-sm">2</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-multiForm-Coolgray">STEP 2</p>
            <p className="text-multiForm-Magnolia">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-5">
          <div
            className={` ${
              step === 3 && "bg-multiForm-Lightblue  text-black "
            } w-7 h-7 rounded-full flex items-center justify-center border-multiForm-Lightgray border-2`}
          >
            <span className="text-sm">3</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-multiForm-Coolgray">STEP 3</p>
            <p className="text-multiForm-Magnolia">ADD-ONS</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-5">
          <div
            className={` ${
              step >= 4 && "bg-multiForm-Lightblue  text-black "
            } w-7 h-7 rounded-full flex items-center justify-center border-multiForm-Lightgray border-2`}
          >
            <span className="text-sm">4</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-multiForm-Coolgray">STEP 4</p>
            <p className="text-multiForm-Magnolia">SUMMARY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step;
