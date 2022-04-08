import React, { useState } from "react";
import "./navBar-component.styles.scss";
import Avatar from "@mui/material/Avatar";
import AddNewLocation from "../NewLocation/form-component";
import { useDispatch } from "react-redux";
import { setAddSpotStatus } from "../../redux/spotSlice/actions";
import { Link } from "react-router-dom";

const NavBar = ({ avatar, name }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
    dispatch(setAddSpotStatus(!status));
  };

  return (
    <div className="navigation-bar">
      <Link to="/" className="name">
        Kite
      </Link>
      <div className="navigators">
        <button className="add-button" onClick={handleClick}>
          Add SPOT
        </button>
        {avatar === undefined || name === undefined ? (
          <Link to="/login">
            <Avatar />
          </Link>
        ) : (
          <div className="loggedIn-user">
            <Avatar
              src={`url(${avatar})`}
              sx={{ height: "1.5em", width: "1.5em" }}
            />
            <span className="loggIn-user-welcome">{`Hello, ${String(name).slice(
              0,
              String(name).indexOf(" ")
            )}!`}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
