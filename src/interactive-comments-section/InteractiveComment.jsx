import React from "react";
import Comments from "./component/Comments";
import data from "./data.json";
import "./index.css";

const InteractiveComment = () => {
  const currentUser = data.currentUser;
  return (
    <>
      <div className="App">
        <Comments currentUser={currentUser} />
      </div>
    </>
  );
};

export default InteractiveComment;
