import React from "react";
import "./About.css";

const About = () => {
  return (
    <main id="about">
      {/* <h1> About Me </h1> */}

      <div className="img-container col">
        <img src="images/blogging.svg" alt="coding" />
      </div>

      <div className="about-me col">
        <h3>About Me</h3>
        <p>
          {/* Hello, 👋 this is Pankaj Sharma from India a guy who love design &
          develop web apps and music. I am currently working at{" "}
          <a href="https://proprofs.com" rel="noreferrer" target="_blank">
            ProProfs
          </a>
          . I design and developed fun things which lives on internet or between
          you and me. I love to build things which found people useful. I love
          to explore technologies. */}
          Hello, 👋 My name is Pankaj Sharma. I am a Software Developer based in Delhi, India. I am currently working at <a href="https://www.appventurez.com/" rel="noreferrer" target="_blank">
            Appventurez
          </a>.I’m specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am focused on React and TypeScript. I enjoy creating things that live on the internet.
        </p>

        <p>
          I like developing interactive things with <b> Code. </b> I'm always up
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
