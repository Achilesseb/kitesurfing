import React from "react";
import "./navBar-component.styles.scss";
import Avatar from "@mui/material/Avatar";
import AddNewLocation from "../NewLocation/form-component";
import { useDispatch } from "react-redux";
import { setAddSpotStatus } from "../../redux/actions";

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
      <span className="name">Kite</span>
      <div className="navigators">
        <button className="add-button" onClick={handleClick}>
          Add SPOT
        </button>
        <Avatar src="/broken-image.jpg" />
      </div>
    </div>
  );
};
export default NavBar;
