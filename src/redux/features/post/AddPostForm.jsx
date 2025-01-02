import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };
  return (
    <>
      <h1 className="ml-3 text-4xl my-3">AddPostForm</h1>

      <form className="p-2 max-w-80" onSubmit={handleSubmit}>
        <div className=" ml-3 ">
          <label htmlFor="post-title">Post Title:</label>
          <input
            type="text"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-slate-500 rounded-lg block my-2 w-full p-1"
          />
        </div>
        <div className=" ml-3">
          <label htmlFor="post-content">Post Content:</label>
          <textarea
            type="text"
            id="post-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-slate-500 rounded-lg block my-2 resize-none w-full p-1 h-28"
          />
        </div>
        <div className=" ml-3">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Save Post
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPostForm;
