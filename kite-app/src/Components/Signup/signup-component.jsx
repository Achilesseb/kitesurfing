import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../../api-utils";
import { useDispatch } from "react-redux";
import { signUp } from "../../api-utils";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const goToRoot = () => navigate("/");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleChange = (e) => {
    if (e.target.id === "firstName") setFirstName(e.target.value);
    if (e.target.id === "givenName") setGivenName(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
    if (e.target.id === "email") setEmail(e.target.value);
  };

  const handleClickedConfirmed = (e) => {
    e.preventDefault();
    const userName = firstName + " " + givenName;
    if (userName !== "" && email !== "" && password !== "") {
      if (!validateEmail(email)) return alert("Email not valid!");
      const userData = { name: userName, password: password, email: email };
      signUp({ userData, dispatch });
      return goToRoot();
    } else alert("Fill all requiered data!");
  };

  return (
    <div className="login-form-div">
      <span className="welcome-message"> Welcome to Kite</span>
      <form className="logIn-form">
        <span>
          <label>First Name</label>
          <input
            id="firstName"
            type="text"
            className="add-input"
            placeholder="firstName"
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Given Name</label>
          <input
            id="givenName"
            type="text"
            className="add-input"
            placeholder="givenName"
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Email</label>
          <input
            id="email"
            type="email"
            className="add-input"
            placeholder="email"
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Password</label>
          <input
            id="password"
            type="password"
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
            SignUp{" "}
          </button>
          <button onClick={goToRoot} className="event-buttons cancel">
            Abort
          </button>
        </span>
      </form>
    </div>
  );
};
export default SignUp;
