import React, { useState, useEffect } from "react";
import "./Work.css";

const Work = () => {
  const [width, setWidth] = useState("200px");
  const [height, setHeight] = useState("150px");

  // Before component did mount
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setWidth("300px");
      setHeight("200px");
    }
  }, []);

  return (
    <section id="work" className="work">
      <h4>Portfolio</h4>
      <h2> My Creative Work </h2>

      <div className="project-container">
        <div className="project-image">
          <a
            href="https://collaborate.proprofs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="image"
              style={{
                backgroundImage: 'url("images/collaborate.jpg")',
                backgroundRepeat: "no-repeat",
                width: width,
                height: height,
                backgroundSize: "cover",
                border: "3px solid #ddd",
                borderRadius: "4px",
              }}
            ></div>
          </a>
        </div>
        <div className="project-description">
          <h3> Collaborate </h3>

          <p>
            Collaborate is a real time chat application build with Node and
            Socket.IO. Collaborate is a web application which is a mixture of
            both Slack and Quora.
            {/* I design & developed various modules of
            collaborate and implement logic. Create APIs for collaborate mobile
            application and real-time sync mobile app and web. I also maintain
            UI/UX changes. */}
            <p>
              <a
                href="https://collaborate.proprofs.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Live preview{" "}
              </a>
            </p>
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <a href="https://astrologybaba.com/" target="_blank" rel="noreferrer">
            <div
              className="image"
              style={{
                backgroundImage: 'url("images/astro-baba.png")',
                backgroundRepeat: "no-repeat",
                width: width,
                height: height,
                backgroundSize: "cover",
                border: "3px solid #ddd",
                borderRadius: "4px",
              }}
            ></div>
          </a>
        </div>
        <div className="project-description">
          <h3> Astro Baba </h3>

          <p>
            Astro Baba is an application where the users can connect with online
            Astrologers. Astro Baba has more than 10k downloads. My role is to
            write reusable code and build various modules of Astro Baba (Live
            Streaming, Coin Management, Push Notifications). Astro Baba is built
            on microservice architecture of NodeJS.
            <p>
              <a
                href="https://astrologybaba.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Live preview{" "}
              </a>
            </p>
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <a href="https://pankaj-sharma-portfolio.netlify.app/" target="_blank"title="Project is under development."  rel="noreferrer">
            <div
              className="image"
              style={{
                backgroundImage: 'url("images/milli.png")',
                backgroundRepeat: "no-repeat",
                width: width,
                height: height,
                backgroundSize: "cover",
                border: "3px solid #ddd",
                borderRadius: "4px",
              }}
            ></div>
          </a>
        </div>
        <div className="project-description">
          <h3> Milli </h3>

          <p>
            Milli is an event organization app currently under development. Where you can register your
            event and sell tickets. I have developed the project from scratch
            and designed the architecture of the project. Stories, Posts, Chat,
            Groups, Geolocation, Suggestion based on common interests. Third
            party payment gateway and Market place.
            <p>
              <a
                href="https://pankaj-sharma-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Project is under development."
              >
                {" "}
                Live preview{" "}
              </a>
            </p>
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <a
            href="https://dark-todo.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="image"
              style={{
                backgroundImage: 'url("images/dark-todo.jpg")',
                backgroundRepeat: "no-repeat",
                width: width,
                height: height,
                backgroundSize: "cover",
                border: "3px solid #ddd",
                borderRadius: "4px",
              }}
            ></div>
          </a>
        </div>
        <div className="project-description">
          <h3> Dark Todo App </h3>

          <p>
            This is a simple todo application in dark mode. This application is
            build on react. You can add new todo tasks. You can also mark todo.
            You can delete todo. It also contains a search features which only
            start filter your todo list when user stop typing instead of running
            on every keyup event.
            <p>
              <a
                href="https://dark-todo.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Live preview{" "}
              </a>
              {" | "}
              <a
                href="https://github.com/Starboy-Sharma/react-todo-app"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Repository{" "}
              </a>
            </p>
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <a
            href="https://what-weather.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="image"
              style={{
                backgroundImage: 'url("images/what-weather.jpg")',
                backgroundRepeat: "no-repeat",
                width: width,
                height: height,
                backgroundSize: "cover",
                border: "3px solid #ddd",
                borderRadius: "4px",
              }}
            ></div>
          </a>
        </div>
        <div className="project-description">
          <h3> What's Weather </h3>

          <p>
            A React weather <b>PWA</b> application used geolocation to show
            weather report in C or F. This application has dynamic background
            change according to the time. I am also using animated react-skycons
            weather icons.
            {/* You can also install this web application in your mobile app as well
            as it is a PWA. Dynamic background change only for responsive view. */}
            <p>
              <a
                href="https://what-weather.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Live preview{" "}
              </a>
              {" | "}
              <a
                href="https://github.com/Starboy-Sharma/react-weather-pwa"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Repository{" "}
              </a>
            </p>
          </p>
        </div>
      </div>
      <hr />
      <div className="more-work">
        <h3> Explore more </h3> <br />
        <a
          href="https://insta-post.netlify.com/"
          rel="noreferrer"
          target="_blank"
        >
          Insta Post |
        </a>
        <a
          href="https://github.com/Starboy-Sharma/JS_Snippets"
          target="_blank"
          rel="noreferrer"
        >
          JS Snippets |
        </a>
        <a
          href="https://codepen.io/starboy-sharma/pen/YzKeEKm"
          rel="noreferrer"
          target="_blank"
        >
          Login Form Design |
        </a>
        <a
          href="https://codepen.io/starboy-sharma/pen/bXbwxo"
          target="_blank"
          rel="noreferrer"
        >
          Card View |
        </a>
        <a
          href="https://captain-america-avenger.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Support only in Desktop"
        >
          Captain America |
        </a>
        <a
          href="https://codepen.io/starboy-sharma/pen/QozjaY"
          target="_blank"
          rel="noreferrer"
        >
          News Design
        </a>
      </div>
    </section>
  );
};

export default Work;
