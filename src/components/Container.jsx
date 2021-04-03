import React from "react";
import Home from "./Home";
import "../styles/Container.css";

function Container() {
  return (
    <div className="container">
      <Home />
      <h3 className="container__developer">&copy; Developed By: Nitin Jha</h3>
    </div>
  );
}

export default Container;
