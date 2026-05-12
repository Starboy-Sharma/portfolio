import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

const Social = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="social">
      <div className="social-icons">
        <SocialIcon
          url="https://www.linkedin.com/in/pankaj-sharma-a0b783131/"
          target="_blank"
          label="LinkedIn"
          network="linkedin"
          bgColor="transparent"
          fgColor="var(--on-dark)"
        />

        <SocialIcon
          url="https://github.com/starboy-sharma"
          target="_blank"
          label="GitHub"
          network="github"
          bgColor="transparent"
          fgColor="var(--on-dark)"
        />

        <SocialIcon
          url="https://twitter.com/Pankaj_sharma43"
          target="_blank"
          label="Twitter"
          network="twitter"
          bgColor="transparent"
          fgColor="var(--on-dark)"
        />

        <SocialIcon
          url="https://codepen.io/starboy-sharma/"
          target="_blank"
          label="CodePen"
          network="codepen"
          bgColor="transparent"
          fgColor="var(--on-dark)"
        />
      </div>

      <span className="copyright">Pankaj Sharma &copy; {currentYear}</span>
    </footer>
  );
};

export default Social;
