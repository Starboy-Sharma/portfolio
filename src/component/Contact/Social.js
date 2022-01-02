import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

const Social = () => {
  return (
    <footer className="social">
      <SocialIcon
        url="https://www.linkedin.com/in/pankaj-sharma-a0b783131/"
        target="_blank"
        label="Our portfolio"
        network="linkedin"
        style={{ marginRight: "20px" }}
      />

      <SocialIcon
        url="https://github.com/starboy-sharma"
        target="_blank"
        label="Our portfolio"
        network="github"
        style={{ marginRight: "20px" }}
      />

      <SocialIcon
        url="https://twitter.com/Pankaj_sharma43"
        target="_blank"
        label="Our portfolio"
        network="twitter"
        style={{ marginRight: "20px" }}
      />

      <SocialIcon
        url="https://codepen.io/starboy-sharma/"
        target="_blank"
        label="Our portfolio"
        network="codepen"
        style={{ marginRight: "20px" }}
        bgColor="#feb32a"
      />

      <span className="copyright"> Pankaj Sharma &copy; 2021 </span>
    </footer>
  );
};

export default Social;
