import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar";
import { useAuth, upload } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
import { getAppKey } from "../../helpers/getKey";
const Profile = () => {
  const currentUser = useAuth();
  const [hidden, setHidden] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  useEffect(() => {
    setKey(getAppKey());
  }, []);
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);
  return (
    <>
      {key?.length > 0 && key !== "guest" ? (
        <div className="w-screen h-screen">
          <Topbar />
          {console.log(key)}
          <div className="wrapper w-full h bg-gray-800  flex flex-col items-center justify-start pt-10">
            <div className="image_cont w-60 h-60 bg-red-500 rounded-full overflow-hidden border-2 border-slate-100">
              <img src={photoURL} className="w-full" alt="profile picture" />
            </div>
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setHidden(!hidden)}
            >
              Change picture
            </span>
            {!hidden && (
              <div className="flex justify-center">
                <div className="mt-3">
                  <input
                    onChange={handleChange}
                    className=" w-full px-3 py-1.5  text-gray-300 bg-neutral-800  border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                  />
                  <button
                    disabled={loading || !photo}
                    onClick={handleClick}
                    className="flex items-center justify-center focus:outline-none cursor-pointer text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  >
                    Upload
                  </button>
                </div>
              </div>
            )}
            <div className="info_cont flex flex-col items-center justify-center pt-10">
              <span className="text-3xl text-white">
                {currentUser?.email === "admin@gmail.com"
                  ? "ADMIN"
                  : currentUser?.displayName}
              </span>
              <span className="text-sm text-white/30">
                {currentUser?.email}
              </span>
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Profile;
