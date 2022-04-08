import React from "react";
import "./navBar-component.styles.scss";
import Avatar from "@mui/material/Avatar";
import AddNewLocation from "../NewLocation/form-component";
import { useDispatch } from "react-redux";
import { setAddSpotStatus } from "../../redux/spotSlice/actions";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  let status = false;
  const handleClick = () => {
    status === false ? (status = true) : (status = false);
    console.log(status);
    dispatch(setAddSpotStatus(status));
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
        <Link to="/login">
          <Avatar src="/broken-image.jpg" />
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
