import React from "react";
import "./Work.css";

const Work = () => {
  const projects = [
    {
      title: "PULSE",
      description: "A cloud-based collaboration tool reimagining real-time organization and sharing of production media globally.",
      image: "images/pulse.png",
      link: "https://pulse.streamlandmedia.com/landing/#!/"
    },
    {
      title: "Collaborate",
      description: "Real-time chat application built with Node and Socket.IO, merging the best of Slack and Quora.",
      image: "images/collaborate.jpg",
      link: "https://collaborate.proprofs.com/"
    },
    {
      title: "Astro Baba",
      description: "Scaleable microservices-based platform connecting users with astrologers, featuring live streaming.",
      image: "images/astro-baba.png",
      link: "https://astrologybaba.com/"
    },
    {
      title: "Milli",
      description: "Event organization powerhouse with integrated ticketing, social groups, and geolocation services.",
      image: "images/milli.png",
      link: "https://pankaj-sharma-portfolio.netlify.app/"
    },
    {
      title: "Dark Todo",
      description: "Advanced task management interface with smart debounce filtering and high-performance React state.",
      image: "images/dark-todo.jpg",
      link: "https://dark-todo.netlify.app/",
      repo: "https://github.com/Starboy-Sharma/react-todo-app"
    },
    {
      title: "What's Weather",
      description: "Dynamic weather PWA using real-time geolocation and adaptive time-based visual themes.",
      image: "images/what-weather.jpg",
      link: "https://what-weather.netlify.app/",
      repo: "https://github.com/Starboy-Sharma/react-weather-pwa"
    }
  ];

  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("project-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="work" className="work" onMouseMove={handleMouseMove}>
      <div className="work-header">
        <h4>Selected Works</h4>
        <h2>Digital Showcases</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div 
              className="project-card-image" 
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noreferrer">Live Preview</a>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">Source Code</a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="more-work">
        <h3>Further Explorations</h3>
        <div className="more-work-links">
          <a href="https://insta-post.netlify.com/" target="_blank" rel="noreferrer">Insta Post</a>
          <a href="https://github.com/Starboy-Sharma/JS_Snippets" target="_blank" rel="noreferrer">JS Snippets</a>
          <a href="https://codepen.io/starboy-sharma/pen/YzKeEKm" target="_blank" rel="noreferrer">Design Systems</a>
          <a href="https://codepen.io/starboy-sharma/pen/bXbwxo" target="_blank" rel="noreferrer">UI Components</a>
          <a href="https://captain-america-avenger.netlify.app/" target="_blank" rel="noreferrer">Web Experiments</a>
          <a href="https://codepen.io/starboy-sharma/pen/QozjaY" target="_blank" rel="noreferrer">Editorial Design</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
