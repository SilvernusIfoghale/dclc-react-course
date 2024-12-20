import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <>
      <Link to="/books/1" className="hover:underline text-blue-500 m-3">
        Book 1
      </Link>
      <Link to="/books/2" className="hover:underline text-blue-500">
        Book 2
      </Link>
      <Link to={`books/${number}`} className="hover:underline text-blue-500">
        Book {number}
      </Link>
      <h1 className="text-2xl font-bold py-10">New Book</h1>
      <Link to="/books/newbook" className="hover:underline text-blue-500 ">
        New Book
      </Link>
      <Outlet context={{ hello: "This is a text from outlet context" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};

export default BookLayout;
