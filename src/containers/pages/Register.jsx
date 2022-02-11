import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import setKey from "../../helpers/setKey";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const navigate = useNavigate();
  const register = async (e) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pw);
      setKey(user.user.accessToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="w-11/12 flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          create your account
        </div>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2" />
        </div>
        <div className="mt-10">
          <div className="flex flex-col mb-6">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              className="text-sm placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-400 w-full  focus:outline-none focus:border-blue-400"
              placeholder="E-Mail Address"
            />
          </div>
          <div className="flex flex-col mb-6">
            <input
              onChange={(e) => setPw(e.target.value)}
              id="password"
              type="password"
              name="password"
              className="text-sm placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-400 w-full  focus:outline-none focus:border-blue-400"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col mb-6">
            <input
              onChange={(e) => setCpw(e.target.value)}
              id="cpassword"
              type="password"
              name="cpassword"
              className="text-sm placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-400 w-full  focus:outline-none focus:border-blue-400"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex w-full">
            <button
              onClick={pw === cpw ? register : null}
              className="flex items-center justify-center focus:outline-none cursor-pointer text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase">Create an Account</span>
              <FiArrowRightCircle size={20} />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
          >
            <AiOutlineUserAdd size={25} />
            <span className="ml-2">You already have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
