import React, { useCallback, useMemo } from "react";

const SimpleCount = () => {
  useMemo(() => {
    console.log("From the simple count component");
  }, []);
  let myvalue = "this is it";
  const savedValue = useCallback(() => {
    console.log(myvalue);
  });
  return <div>SimpleCount </div>;
};

export default SimpleCount;
