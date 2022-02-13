import React from "react";

const Post = ({ post }) => {
  return (
    <div className="w-11/12 h-80 xl:w-8/12 xl:h-full xxl:w-8/12 xxl:h-full bg-blue-300 mt-2 mx-auto rounded-xl  overflow-x-hidden overflow-y-auto">
      <div className="wrapper p-2">
        <h1 className="text-black text-2xl text-center">{post.title}</h1>
        <p className="text-black/40 my-3 text-center">{post.postText}</p>
        <span className="text-black">{post.author.name}</span>
      </div>
    </div>
  );
};

export default Post;
