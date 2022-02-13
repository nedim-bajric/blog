import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Createpost = ({ setAddPost, addPost }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/home");
  };

  return (
    <div className="absolute w-11/12 h-96 bg-white rounded-xl left-0 right-0 mx-auto lg:w-8/12 xl:w-5/12 xxl:w-1/3">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <AiOutlineClose
          className="self-end mr-3"
          size={20}
          onClick={() => setAddPost(!addPost)}
        />
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          placeholder="Enter Title"
          className="border-2 bg-gray-200 focus:outline-none focus:border-blue-400"
        />

        <textarea
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          placeholder="Enter Content"
          rows="10"
          cols="40"
          className="mt-2 p-2 border-2 bg-gray-200 focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={createPost}
          className="flex items-center justify-center focus:outline-none cursor-pointer text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-40 mt-2 transition duration-150 ease-in"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Createpost;
