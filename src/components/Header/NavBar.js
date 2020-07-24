/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../css/NavBar.css";
import MenuButton from "./MenuButton";
import { appLogo } from "../../svg-icons";

const NavBar = () => {
  const [isActive, setClassName] = useState(false);
  return (
    <nav className="nav-bar">
      {appLogo}
      <MenuButton callBack = {setClassName} />
      <ul className={`${isActive ? "active" : ""}`}>
        <li>
          <a href="#">PRODUCT</a>
        </li>
        <li>
          <a href="#">FEATURES</a>
        </li>
        <li>
          <a href="#">PRICING</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
