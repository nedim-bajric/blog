import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { getAppKey } from "../../helpers/getKey";
import removeKey from "../../helpers/removeKey";

const Topbar = () => {
  const [hidden, setHidden] = useState(true);
  const key = getAppKey();
  const navigate = useNavigate();

  const logout = () => {
    removeKey();
    navigate("/");
  };

  return (
    <div className="w-screen h-16 bg-gray-800 relative">
      <div className="wrapper w-full h-full flex items-center justify-between text-white px-2">
        <div className="logo_container font-bold text-slate-300 font-mono animate-pulse cursor-pointer">
          <Link to="/home">blog.</Link>
        </div>
        <div className="inline_menu_container text-lg flex items-center sm:hidden md:hidden lg:hidden">
          <Link to="/home">Home</Link>
          <Link className="mx-2" to="/contact">
            Contact
          </Link>
          {key?.length > 0 ? (
            key === "guest" ? (
              <>
                <Link to="/" className="mr-2" onClick={logout}>
                  Login
                </Link>
                <Link to="/register" onClick={logout}>
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="mr-2">
                  Profile
                </Link>
                <span onClick={logout} className="cursor-pointer">
                  Logout
                </span>
              </>
            )
          ) : (
            <>
              <Link className="mr-2" to="/login">
                Login
              </Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
        <div
          className="hamburger_menu_container text-slate-300 xl:hidden xxl:hidden"
          onClick={() => setHidden(!hidden)}
        >
          {hidden ? <BiMenuAltLeft size={30} /> : <BiMenuAltRight size={30} />}
        </div>
      </div>
      <div
        className={`${
          hidden && "-translate-y-[200%]"
        }  w-1/3 absolute right-0 rounded-b-md h-48 text-2xl bg-slate-800 text-white flex flex-col items-center justify-center transition-transform duration-500 xl:hidden xxl:hidden`}
      >
        <Link to="/home" onClick={() => setHidden(!hidden)}>
          Home
        </Link>
        <Link to="/contact" onClick={() => setHidden(!hidden)}>
          Contact
        </Link>
        {key?.length > 0 ? (
          key === "guest" ? (
            <>
              <Link to="/" className="mr-2" onClick={logout}>
                Login
              </Link>
              <Link to="/register" onClick={logout}>
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="mr-2">
                Profile
              </Link>
              <span onClick={logout} className="cursor-pointer">
                Logout
              </span>
            </>
          )
        ) : (
          <>
            <Link className="mr-2" to="/login">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;
