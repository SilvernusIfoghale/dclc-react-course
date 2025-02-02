import React, { createContext, useState } from "react";

export const InfoContext = createContext(null);

const InfoContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [plan, setPlan] = useState("");
  const [planType, setPlanType] = useState(1);
  const [online, setOnline] = useState(false);
  const [larger, setLarger] = useState(false);
  const [custom, setCustom] = useState(false);
  const [price, setPrice] = useState();
  return (
    <InfoContext.Provider
      value={{
        step,
        setStep,
        info,
        setInfo,
        plan,
        setPlan,
        planType,
        setPlanType,
        online,
        setOnline,
        larger,
        setLarger,
        custom,
        setCustom,
        price,
        setPrice,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;
