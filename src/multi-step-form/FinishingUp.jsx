import React, { useContext, useEffect, useState } from "react";
import { InfoContext } from "./context/InfoContext";

const FinishingUp = () => {
  const { step, setStep } = useContext(InfoContext);
  const { plan } = useContext(InfoContext);
  const { planType } = useContext(InfoContext);
  const { price } = useContext(InfoContext);
  const { online } = useContext(InfoContext);
  const { larger } = useContext(InfoContext);
  const { custom } = useContext(InfoContext);
  const [totalPrice, setTotalPrice] = useState(price);

  const total = () => {
    let prevPrice = 0;
    if (planType == 1) {
      //year
      if (online) {
        prevPrice += 10;
      }
      if (larger) {
        prevPrice += 20;
      }
      if (custom) {
        prevPrice += 20;
      }

      setTotalPrice(totalPrice + prevPrice);
    } else {
      // month
      if (online) {
        prevPrice += 1;
      }
      if (larger) {
        prevPrice += 2;
      }
      if (custom) {
        prevPrice += 2;
      }
      setTotalPrice(totalPrice + prevPrice);
    }
  };

  useEffect(() => {
    total();
  }, []);
  return (
    <>
      <div>
        <div className="mt-5 bg-multiForm-Alabaster rounded-lg min-h-32 p-5">
          <div className="flex justify-between items-center pb-5 border-b-[1px] border-multiForm-Lightgray">
            <div>
              <h4 className="text-multiForm-Marineblue font-bold">
                {plan} {planType == 1 ? "(Yearly)" : "(Monthly)"}
              </h4>
              <button
                className="text-multiForm-Coolgray underline hover:text-multiForm-Marineblue"
                onClick={() => setStep(2)}
              >
                Change
              </button>
            </div>
            <p className="text-multiForm-Marineblue font-bold">
              ${price}/{planType == 1 ? "yr" : "mo"}
            </p>
          </div>
          <div>
            {online && (
              <div className="flex justify-between items-center text-sm my-3">
                <p className="text-multiForm-Coolgray">Online service</p>
                <p className="text-multiForm-Marineblue font-semibold">
                  +$/{planType == 1 ? "10yr" : "1mo"}
                </p>
              </div>
            )}
            {larger && (
              <div className="flex justify-between items-center text-sm my-3">
                <p className="text-multiForm-Coolgray">Larger storage</p>
                <p className="text-multiForm-Marineblue font-semibold">
                  +$/{planType == 1 ? "20yr" : "2mo"}
                </p>
              </div>
            )}

            {custom && (
              <div className="flex justify-between items-center text-sm my-3">
                <p className="text-multiForm-Coolgray">Customizable profile</p>
                <p className="text-multiForm-Marineblue font-semibold">
                  +$/{planType == 1 ? "20yr" : "2mo"}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="px-5">
          <div className=" flex justify-between items-center">
            <p className="text-multiForm-Coolgray">
              Total {planType == 1 ? "(per year)" : "(per month)"}{" "}
            </p>
            <p className="text-multiForm-Purplishblue font-bold">
              ${totalPrice}/{planType == 1 ? "yr" : "mo"}
            </p>
          </div>
        </div>
        <div className="bg-white left-0 right-0 h-24 absolute bottom-0 sm:static sm:bg-transparent ">
          <button
            type="submit"
            className=" absolute  bottom-5 left-10 sm:left-[17rem] lg:left-72 mt-4 px-4 py-3 rounded-md flex place-self-end "
          >
            <p
              className="text-xs font-bold text-multiForm-Coolgray hover:cursor-pointer hover:scale-110 duration-700 hover:text-multiForm-Marineblue"
              onClick={() => setStep(step - 1)}
            >
              Go Back
            </p>
          </button>
          <button
            onClick={() => setStep(step + 1)}
            type="submit"
            className=" hover:bg-multiForm-Marineblue absolute  bottom-5 right-10 sm:right-16 mt-4 px-4 py-3 rounded-md flex place-self-end bg-multiForm-Purplishblue"
          >
            <p className="text-xs text-multiForm-Lightblue">Confirm</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default FinishingUp;
