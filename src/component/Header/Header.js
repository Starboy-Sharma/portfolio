import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <a href="#work" title="Work">Work</a>
        <a href="#about" title="About">About</a>
        <a href="#contact" title="Contact">Contact</a>
      </div>
      <div className="welcome-msg">
        <h1>Hello World! 👋</h1>
        <h3>I'm Pankaj Sharma</h3>
        <span className="role">Sr. Software Engineer</span>
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
