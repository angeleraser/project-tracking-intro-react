import React from "react";
import Article from "./Article";
import "../../css/MainContent.css";
import { illustration } from "../../svg-icons";
const MainContent = () => {
  return (
    <main className="main-content">
      <div className="illustration"></div>
      {illustration}
      <Article />
    </main>
  );
};

export default MainContent;
