import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const Books = () => {
  const { id } = useParams();
  const { hello } = useOutletContext();
  const data = useOutletContext();
  return (
    <>
      <h1 className="text-teal-600 font-bold text-3xl mt-5">
        This is the books page
      </h1>
      <div className="text-blue-400 font-mono text-4xl font-bold">
        Books {id}
        <div className="w-32 h-32 bg-blue-400"></div>
        <p>On the Books Page {data.hello} </p>
        <p>Text from outlet context {hello}</p>
      </div>
      {/* <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <h1 className="text-2xl font-bold py-10">New Book</h1>
      <Link to="/books/newbook">New Book</Link> */}
    </>
  );
};

export default Books;
