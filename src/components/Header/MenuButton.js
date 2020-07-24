import React, { useState } from "react";
import "../../css/MenuButton.css";
const MenuButton = ({ callBack }) => {
  const [isActive, setState] = useState(false);
  const displayMenu = () => {
    callBack(!isActive);
    setState(!isActive);
  };
  return (
    <button
      onClick={displayMenu}
      className={`menu-button ${isActive ? "close" : ""}`}></button>
  );
};

export default MenuButton;
