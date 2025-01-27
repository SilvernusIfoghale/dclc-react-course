import React from "react";
import Comments from "./component/Comments";
import data from "./data.json";
import "./interactive.css";

const InteractiveComment = () => {
  const currentUser = data.currentUser;

  return (
    <>
      <div
        className="md:flex items-center justify-center
      bg-comment_Color-Very_light_gray
      "
      >
        <div className="md:max-w-[800px] mt-[5%]">
          <Comments currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default InteractiveComment;
