import React from "react";
import "./About.css";

const About = () => {
  return (
    <main id="about">
      <div className="img-container">
        <img src="images/blogging.svg" alt="coding" />
      </div>

      <div className="about-me">
        <h3>About Me</h3>
        <div className="about-me-text-container">
          <p>
            Hello, 👋 My name is Pankaj Sharma. I am a Software Developer based in
            Delhi, India. I am currently working at{" "}
            <a href="https://www.emids.com/" rel="noreferrer" target="_blank">
              Emids
            </a>
            .
          </p>
          <p>
            I specialize in building (and occasionally designing) exceptional
            digital experiences. Currently, I am focused on building UI libraries using <b>web components</b> in <b>microfrontends</b>.
            I enjoy creating things that live on the internet.
          </p>

          <p>
            I like developing interactive things with <b>Code</b>. I'm always up
            for a chat.
          </p>

          <p>
            <a
              href="https://honzaap.github.io/GithubCity/?name=starboy-sharma&year=2022"
              rel="noreferrer"
              target="_blank"
            >
              My Github Contributions in 3D view
            </a>
          </p>
        </div>

        <a href="#work" className="button" style={{ marginTop: '24px' }}>
          View My Work
        </a>
      </div>
    </main>
  );
};

export default About;
