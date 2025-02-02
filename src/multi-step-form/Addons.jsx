import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { InfoContext } from "./context/InfoContext";

const Addons = () => {
  const { step, setStep } = useContext(InfoContext);
  const { planType } = useContext(InfoContext);

  const { online, setOnline } = useContext(InfoContext);
  const { larger, setLarger } = useContext(InfoContext);
  const { custom, setCustom } = useContext(InfoContext);
  const [warning, setWarning] = useState(false);

  const handleNext = () => {
    if (online || larger || custom) {
      setWarning(false);
      setStep(step + 1);
    } else {
      setWarning(true);
    }
  };

  useEffect(() => {
    setWarning(false);
  }, [online, custom, larger]);

  return (
    <>
      <div className="mt-7">
        <div>
          <div
            className={`${
              online && "bg-blue-100"
            } hover:border-multiForm-Pastelblue border-multiForm-Lightgray border-[1.5px] rounded-lg flex justify-between items-center gap-4 py-2 px-4 my-3`}
          >
            <div className="flex items-center gap-4 ">
              <label
                htmlFor="checkbox"
                onClick={() => setOnline((prev) => !prev)}
                className={` ${
                  online &&
                  "bg-multiForm-Purplishblue border-multiForm-Purplishblue"
                } relative appearance-none border-2 w-6 h-6 p-1 rounded-md border-multiForm-Lightgray  cursor-pointer`}
              >
                <input
                  type="checkbox"
                  name="onlineService"
                  className="appearance-none"
                />
                {online && (
                  <span className="absolute  left-[5px] bottom-[1px]">
                    <FaCheck className="text-white w-[10px] bg-transparent " />
                  </span>
                )}
              </label>
              <div>
                <h3 className="font-semibold text-multiForm-Marineblue text-xs sm:text-sm">
                  Online service
                </h3>
                <p className="text-multiForm-Coolgray text-xs sm:text-sm">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <div>
              {planType == 1 ? (
                <p className="text-xs sm:text-sm text-multiForm-Purplishblue">
                  +$10/yr
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-multiForm-Purplishblue">
                  +$1/mo
                </p>
              )}
            </div>
          </div>
          <div
            className={`${
              larger && "bg-blue-100"
            } hover:border-multiForm-Pastelblue border-multiForm-Lightgray border-[1.5px] rounded-lg flex justify-between items-center gap-4 py-2 px-4 my-3`}
          >
            <div className="flex items-center gap-4 ">
              <label
                htmlFor="checkbox"
                onClick={() => setLarger((prev) => !prev)}
                className={` ${
                  larger &&
                  "bg-multiForm-Purplishblue border-multiForm-Purplishblue"
                } relative appearance-none border-2 w-6 h-6 p-1 rounded-md border-multiForm-Lightgray  cursor-pointer`}
              >
                <input
                  type="checkbox"
                  name="onlineService"
                  className="appearance-none"
                />
                {larger && (
                  <span className="absolute  left-[5px] bottom-[1px]">
                    <FaCheck className="text-white w-[10px] bg-transparent " />
                  </span>
                )}
              </label>
              <div>
                <h3 className="font-semibold text-multiForm-Marineblue text-xs sm:text-sm">
                  Larger storage
                </h3>
                <p className="text-multiForm-Coolgray text-xs sm:text-sm">
                  Extra 1TB of cloud save
                </p>
              </div>
            </div>
            <div>
              {planType == 1 ? (
                <p className="text-xs sm:text-sm text-multiForm-Purplishblue">
                  +$20/yr
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-multiForm-Purplishblue">
                  +$2/mo
                </p>
              )}
            </div>
          </div>
          <div
            className={`${
              custom && "bg-blue-100"
            } hover:border-multiForm-Pastelblue border-multiForm-Lightgray border-[1.5px] rounded-lg flex justify-between items-center gap-4 py-2 px-4 my-3`}
          >
            <div className="flex items-center gap-4 ">
              <label
                htmlFor="checkbox"
                onClick={() => setCustom((prev) => !prev)}
                className={` ${
                  custom &&
                  "bg-multiForm-Purplishblue border-multiForm-Purplishblue"
                } relative appearance-none border-2 w-6 h-6 p-1 rounded-md border-multiForm-Lightgray  cursor-pointer`}
              >
                <input
                  type="checkbox"
                  name="onlineService"
                  className="appearance-none"
                />
                {custom && (
                  <span className="absolute  left-[5px] bottom-[1px]">
                    <FaCheck className="text-white w-[10px] bg-transparent " />
                  </span>
                )}
              </label>
              <div>
                <h3 className="font-semibold text-multiForm-Marineblue text-xs sm:text-sm">
                  Customizable profile
                </h3>
                <p className="text-multiForm-Coolgray text-xs sm:text-sm">
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <div>
              {planType == 1 ? (
                <p className=" text-multiForm-Purplishblue text-xs sm:text-sm">
                  +$20/yr
                </p>
              ) : (
                <p className=" text-multiForm-Purplishblue text-xs sm:text-sm">
                  +$2/mo
                </p>
              )}
            </div>
          </div>
        </div>
        {warning && (
          <p className="text-red-400 text-xs mt-[-10px] ">
            Pick at least one Add-ons*
          </p>
        )}
        <div className="bg-white left-0 right-0 h-24 absolute bottom-0 sm:static sm:bg-transparent ">
          <button
            onClick={() => setStep(step - 1)}
            type="submit"
            className=" absolute  bottom-5 left-10 sm:left-[17rem] lg:left-72 mt-4 px-4 py-3 rounded-md flex place-self-end "
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
    </>
  );
};

export default Addons;
