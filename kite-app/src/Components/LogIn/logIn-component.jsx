import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./logIn-component.styles.scss";
import { logIn } from "../../api-utils";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const goToRoot = () => navigate("/");
  const handleChange = (e) => {
    if (e.target.placeholder === "username") setUserName(e.target.value);
    if (e.target.placeholder === "password") setPassword(e.target.value);
  };
  const handleClickedConfirmed = (e) => {
    e.preventDefault();
    if (userName !== null) {
      const userData = { name: userName, password: password };
      logIn({ userData, dispatch });
      return goToRoot();
    }
  };

  return (
    <div className="login-form-div">
      <span className="welcome-message"> Welcome to Kite</span>
      <form className="logIn-form">
        <span>
          <label>Name</label>
          <input
            type="text"
            id="username"
            className="add-input"
            placeholder="username"
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Password</label>
          <input
            type="password"
            id="password"
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
          <button onClick={goToRoot} className="event-buttons cancel">
            Abort
          </button>
        </span>
      </form>
      <div>
        <div>
          <span>Don`t have an account?</span>
          <Link
            className="event-buttons confirm signup"
            to="/signup"
            style={{ textDecoration: "none" }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
