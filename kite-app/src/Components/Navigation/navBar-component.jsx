import React from "react";
import "./navBar-component.styles.scss";
import Avatar from "@mui/material/Avatar";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <span className="name">Kite</span>
      <Avatar src="/broken-image.jpg" />
    </div>
  );
};
export default NavBar;