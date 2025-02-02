import React, { useState } from "react";
import "./multiForm.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import InfoContextProvider from "./context/InfoContext";
const IndexForm = () => {
  const [step, setStep] = useState(5);
  return (
    <>
      <InfoContextProvider>
        <div className="font-ubuntu bg-multiForm-Lightblue w-full min-h-[100vh] sm:flex justify-center items-center ">
          <div className="sm:bg-multiForm-Alabaster rounded-2xl sm:p-5 w-full sm:w-[90%] md:w-[80%] lg:w-[65%] h-[calc(100vh-90px)] sm:shadow-lg sm:flex justify-between gap-5 sm:relative static">
            {/* Aside section  */}
            <Step />
            {/* form section  */}
            <PersonalForm step={step} />
          </div>
        </div>
      </InfoContextProvider>
    </>
  );
};

export default IndexForm;
