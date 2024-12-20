import React from "react";
import { useLocation } from "react-router-dom";

const BookList = () => {
  const location = useLocation();
  console.log(location);
  return <div>BookList {location.state}</div>;
};

export default BookList;
