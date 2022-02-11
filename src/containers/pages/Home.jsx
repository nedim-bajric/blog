import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";
import { getAppKey } from "../../helpers/getKey";
const Home = () => {
  const navigate = useNavigate();

  const [key, setKey] = useState("");

  useEffect(() => {
    setKey(getAppKey());
  }, []);
  return (
    <div>
      {key?.length > 0 ? (
        <div>
          <Topbar />
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Home;
