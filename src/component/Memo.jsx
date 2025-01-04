import React, { useMemo, useState } from "react";
import SimpleCount from "./SimpleCount";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState("");
  const maxCount = (num) => {
    let loopTime = 0;
    for (let i = 0; i <= 100000000; i++) {
      loopTime += num;
    }
    return loopTime;
  };
  const loopValue = useMemo(() => {
    return maxCount(num);
  }, [num]);
  return (
    <>
      <div>
        <h1>Huge part of the component</h1>
        <input
          className="border-2"
          type="number"
          name="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value) || 0)}
        />
        <p>Big cal result: {loopValue}</p>
        <div>
          <h1>Light part of the component</h1>
          <button
            className="border-4 p-2"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <p>Count is : {count}</p>
        </div>
        <SimpleCount />
      </div>
    </>
  );
};

export default Memo;
