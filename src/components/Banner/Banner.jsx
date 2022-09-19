import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div>
      <div className="hero-banner">
        <div className="hero-banner-text"></div>
        <h1 className="title">
          Find the right <br />
          cause for you{" "}
        </h1>
        <p className="sub-title">Log in now to start contributing.</p>
        <a className="login-button" href="/login">
          Log in
        </a>
      </div>
    </div>
  );
}
export default Banner;
