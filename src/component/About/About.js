import React from "react";
import "./About.css";

const About = () => {
  return (
    <main>
      {/* <h1> About Me </h1> */}

      <div className="img-container col">
        <img src="images/about.gif" alt="coding" />
      </div>

      <div className="about-me col">
        <h3>About Me</h3>
        <p>
          Hello 👋 this is Pankaj Sharma from India a guy who love design &
          develop web apps and music. I am currently working at{" "}
          <a href="https://proprofs.com" rel="noreferrer" target="_blank">
            ProProfs
          </a>
          . I design and developed fun things which lives on internet or between
          you and me. I love to build things which found people useful. I love
          to explore technologies.
        </p>

        <p>
          I like making fun interactive things with <b> Code. </b> I'm always up
          for a chat.
        </p>

        <a href="#work" className="button">
          {" "}
          Download CV{" "}
        </a>
      </div>
    </main>
  );
};

export default About;
