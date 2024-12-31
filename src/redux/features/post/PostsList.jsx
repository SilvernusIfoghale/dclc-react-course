import React from "react";
import { postsState } from "./postsSlice";
import { useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
  const posts = useSelector(postsState);
  const postsContent = posts.map((post) => (
    <div
      key={post.id}
      className="bg-slate-800 m-3 p-5 rounded-lg max-w-80 text-white text-xl font-mono "
    >
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      {/* <p>Content: {post.content.substring(0, 100)}</p> */}
    </div>
  ));
  return (
    <>
      <AddPostForm />
      <h1 className="text-4xl ml-4 mt-3">Posts</h1>
      {postsContent}
    </>
  );
};

export default PostsList;
