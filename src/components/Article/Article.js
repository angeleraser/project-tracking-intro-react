import React from "react";
import "../../css/Article.css";
import Button from "./Button";
const Article = () => {
  return (
    <article>
      <h1>
        <span>NEW</span> MONOGRAPH DASHBOARD
      </h1>
      <h2>POWERFUL INSIGHTS INTO YOUR TEAM</h2>
      <p>Project planning and time tracking for agile teams</p>
      <div className="btn-wrapper">
        <Button label="Schedule a Demo"/>
        <p>TO SEE A PREVIEW</p>
      </div>
    </article>
  );
};

export default Article;
