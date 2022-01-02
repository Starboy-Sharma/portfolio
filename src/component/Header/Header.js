import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="welcome-msg">
        <h1> Hello World! 👨‍💻</h1>
        <h3> I'm Pankaj Sharma </h3>
        <span> Full Stack Developer </span>
      </div>
      <div className="nav">
        <a href="#work"> Work </a>
      </div>
      <div className="arrow-down">
        <a href="#about">
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
