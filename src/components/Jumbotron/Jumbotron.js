import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div  className="jumbotron">
  <h1> New York Times Search</h1>

    {children}
  </div>

export default Jumbotron;