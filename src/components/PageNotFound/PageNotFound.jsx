import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <section id="not-found">
      <div className="circles">
        <p>
          404<br></br>
          <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </section>
  );
};

export default PageNotFound;
