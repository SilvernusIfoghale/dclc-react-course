import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Memo from "../component/Memo";
import ContextData from "../component/ContextData";

const BookList = () => {
  const location = useLocation();
  console.log(location);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, event) => {
    if (event.target.value.length > 0 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <div>
      BookList {location.state}
      <div className="bg-blue-200 p-5">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            onChange={(event) => handleChange(index, event)}
            maxLength={1} // Optional: limit to one character
            className="m-2 p-2 w-10"
          />
        ))}
      </div>
      <Memo />
      <ContextData />
    </div>
  );
};

export default BookList;
