import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/Article/MainContent";
// import NavBar from "./components/Header/NavBar";\
import "../src/css/index.css";
const ROOT = document.getElementById("root");

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <div className="bg-pattern"></div>
      <Header />
      <MainContent />
    </div>
  );
};
ReactDOM.render(<ContentWrapper />, ROOT);
