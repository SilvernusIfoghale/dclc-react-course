import React from "react";

const FinishingUp = () => {
  return (
    <>
      <div>
        <div className="mt-5 bg-multiForm-Alabaster rounded-lg min-h-48 p-5">
          <div className="flex justify-between items-center pb-5 border-b-[1px] border-multiForm-Lightgray">
            <div>
              <h4 className="text-multiForm-Marineblue font-bold">
                Arcade (Yearly)
              </h4>
              <button className="text-multiForm-Coolgray underline">
                Change
              </button>
            </div>
            <p className="text-multiForm-Marineblue font-bold">$90/Yr</p>
          </div>
          <div>
            <div className="flex justify-between items-center text-sm my-3">
              <p className="text-multiForm-Coolgray">Online service</p>
              <p className="text-multiForm-Marineblue font-semibold">+$10/yr</p>
            </div>
            <div className="flex justify-between items-center text-sm my-3">
              <p className="text-multiForm-Coolgray">Larger storage</p>
              <p className="text-multiForm-Marineblue font-semibold">+$20/yr</p>
            </div>
            <div className="flex justify-between items-center text-sm my-3">
              <p className="text-multiForm-Coolgray">Larger storage</p>
              <p className="text-multiForm-Marineblue font-semibold">+$20/yr</p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className=" flex justify-between items-center">
            <p className="text-multiForm-Coolgray">Total (per year)</p>
            <p className="text-multiForm-Purplishblue font-bold">$120/yr</p>
          </div>
        </div>
        <div className="bg-white left-0 right-0 h-24 absolute bottom-0 sm:static sm:bg-transparent ">
          <button
            type="submit"
            className=" absolute  bottom-5 left-10 sm:left-[17rem] lg:left-72 mt-4 px-4 py-3 rounded-md flex place-self-end "
          >
            <p className="text-xs font-bold text-multiForm-Coolgray hover:cursor-pointer hover:scale-110 duration-700 hover:text-multiForm-Marineblue">
              Go Back
            </p>
          </button>
          <button
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
