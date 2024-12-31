import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementAmount } from "./CounterSlice";
import { countState } from "./CounterSlice";

export default function Counter() {
  const [amount, setAmount] = useState(0);
  const count = useSelector(countState);
  const dispatch = useDispatch();
  const handleReset = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <div className="flex justify-center">
      <div className="w-96 border-2 text-center mt-10 p-5">
        <h1 className="text-2xl pb-10">Counter App with Redux ToolKit</h1>
        <h2 className="text-5xl font-bold pb-6">{count}</h2>
        <div>
          <input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            type="text"
            className="my-5 border-gray-400 border-2 w-full rounded-md p-1"
          />
        </div>
        <div className="mb-5">
          <button
            className="text-white bg-blue-600 px-4 py-2 mx-2 rounded-md hover:bg-blue-500 active:bg-blue-600"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="text-white bg-blue-600 px-4 py-2 mx-2 rounded-md hover:bg-blue-500 active:bg-blue-600"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="text-white bg-red-600 px-4 py-2 mx-2 rounded-md hover:bg-red-500 active:bg-red-600"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="text-white bg-green-600 px-4 py-2 mx-2 rounded-md hover:bg-green-500 active:bg-green-600 my-3"
            onClick={() => dispatch(incrementAmount(amount))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}
