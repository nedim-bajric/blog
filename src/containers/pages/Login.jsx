import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase";
import setKey from "../../helpers/setKey";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      setKey(user.user.accessToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pw);
      setKey(user.user.accessToken);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginAsGuest = () => {
    setKey("guest");
    navigate("/home");
  };
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="w-11/12 flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          Login To Your Account
        </div>
        <button
          onClick={loginWithGoogle}
          className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200"
        >
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-12 ">
            <FcGoogle size={20} />
          </span>
          <span>Login with Google</span>
        </button>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">
              Or Login With Email
            </span>
          </div>
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
              onKeyPress={(e) => (e.key === "Enter" ? login() : null)}
              id="password"
              type="password"
              name="password"
              className="text-sm placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-400 w-full  focus:outline-none focus:border-blue-400"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center mb-6 -mt-4">
            <div onClick={loginAsGuest}>
              <span className="inline-flex cursor-pointer text-xs sm:text-sm text-blue-500 hover:text-blue-700">
                Continue as Guest
              </span>
            </div>
            <div
              onClick={() => window.localStorage.clear()}
              className="flex ml-auto"
            >
              <span className="inline-flex cursor-pointer text-xs sm:text-sm text-blue-500 hover:text-blue-700">
                Forgot Your Password?
              </span>
            </div>
          </div>

          <div className="flex w-full">
            <button
              onClick={login}
              className="flex items-center justify-center focus:outline-none cursor-pointer text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase">Login</span>
              <FiArrowRightCircle size={20} />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/register"
            className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
          >
            <AiOutlineUserAdd size={25} />
            <span className="ml-2">You don't have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
