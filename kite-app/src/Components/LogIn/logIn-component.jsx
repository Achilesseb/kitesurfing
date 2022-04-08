import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./logIn-component.styles.scss";
import { logIn } from "../../utils";

const LogIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const handleAbordClick = () => navigate("/");
  const handleChange = (e) => {
    if (e.target.placeholder === "username") setUserName(e.target.value);
    if (e.target.placeholder === "password") setPassword(e.target.value);
  };
  const handleClickedConfirmed = (e) => {
    e.preventDefault();
    if (userName !== null) logIn({ userName: userName, password: password });
  };

  return (
    <div className="login-form-div">
      <span className="welcome-message"> Welcome to Kite</span>
      <form className="logIn-form">
        <span>
          <label>Name</label>
          <input
            className="add-input"
            placeholder="username"
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Password</label>
          <input
            className="add-input"
            placeholder="password"
            onChange={handleChange}
          />
        </span>

        <span className="event-buttons">
          <button
            className="event-buttons confirm"
            onClick={handleClickedConfirmed}
          >
            LogIn{" "}
          </button>
          <button onClick={handleAbordClick} className="event-buttons cancel">
            Abort
          </button>
        </span>
      </form>
    </div>
  );
};
export default LogIn;
