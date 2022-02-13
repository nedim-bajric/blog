import React from "react";

const Post = ({ post }) => {
  return (
    <div className="w-11/12 h-80 bg-gray-600 mt-2 mx-auto rounded-xl overflow-scroll">
      <div className="wrapper p-2">
        <h1 className="text-white text-2xl text-center">{post.title}</h1>
        <p className="text-white/30 my-3 text-center">{post.postText}</p>
        <span className="text-black">{post.author.name || "ghost"}</span>
      </div>
    </div>
  );
};

export default Post;
