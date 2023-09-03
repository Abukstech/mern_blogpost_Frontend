import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import ".././toggle.css";

const TogglePage = () => {
  const [index, setIndex] = useState(true);

  const handleToggle = () => {
    setIndex(!index);
  };

  return (
    <div className="toggle-card">
      {index ? (
        <div>
          <Login />
        </div>
      ) : (
        <div>
          <SignUp />
        </div>
      )}

      <button className="btn" onClick={handleToggle}>
        {index
          ? "New to Yipada ? Join now"
          : "Already have an account ? Login here"}{" "}
      </button>
    </div>
  );
};

export default TogglePage;
