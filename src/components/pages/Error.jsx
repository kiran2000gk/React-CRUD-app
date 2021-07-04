import React from "react";
import "./error.css";
import Errr from "./pagenotfound.jpg";

const Error = () => {
  return (
    <div className="ers">
      <div className="container py-5">
        <h1> Page not found-404! </h1>
        <img src={Errr} alt="" />
      </div>
    </div>
  );
};

export default Error;
