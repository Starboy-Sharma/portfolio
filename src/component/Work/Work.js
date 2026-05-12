import React from "react";
import "./Work.css";

const Work = () => {
  const projects = [
    {
      title: "PULSE",
      description: "A cloud-based collaboration tool that reimagines real-time organization, rendering, and sharing of production media from anywhere in the world.",
      image: "images/pulse.png",
      link: "https://pulse.streamlandmedia.com/landing/#!/"
    },
    {
      title: "Collaborate",
      description: "A real-time chat application built with Node and Socket.IO. Mixture of both Slack and Quora functionalities.",
      image: "images/collaborate.jpg",
      link: "https://collaborate.proprofs.com/"
    },
    {
      title: "Astro Baba",
      description: "Connect with online Astrologers. Built on microservice architecture with NodeJS, featuring live streaming and coin management.",
      image: "images/astro-baba.png",
      link: "https://astrologybaba.com/"
    },
    {
      title: "Milli",
      description: "Event organization app where you can register events and sell tickets. Features chat, groups, and geolocation.",
      image: "images/milli.png",
      link: "https://pankaj-sharma-portfolio.netlify.app/"
    },
    {
      title: "Dark Todo App",
      description: "A sleek React todo application featuring smart search filtering and task management.",
      image: "images/dark-todo.jpg",
      link: "https://dark-todo.netlify.app/",
      repo: "https://github.com/Starboy-Sharma/react-todo-app"
    },
    {
      title: "What's Weather",
      description: "A React weather PWA using geolocation and dynamic backgrounds based on time and weather conditions.",
      image: "images/what-weather.jpg",
      link: "https://what-weather.netlify.app/",
      repo: "https://github.com/Starboy-Sharma/react-weather-pwa"
    }
  ];

  return (
    <section id="work" className="work">
      <div className="work-header">
        <h4>Portfolio</h4>
        <h2>My Creative Work</h2>
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
                <a href={project.repo} target="_blank" rel="noreferrer">Repository</a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="more-work">
        <h3>Explore More</h3>
        <div className="more-work-links">
          <a href="https://insta-post.netlify.com/" target="_blank" rel="noreferrer">Insta Post</a>
          <a href="https://github.com/Starboy-Sharma/JS_Snippets" target="_blank" rel="noreferrer">JS Snippets</a>
          <a href="https://codepen.io/starboy-sharma/pen/YzKeEKm" target="_blank" rel="noreferrer">Login Form</a>
          <a href="https://codepen.io/starboy-sharma/pen/bXbwxo" target="_blank" rel="noreferrer">Card View</a>
          <a href="https://captain-america-avenger.netlify.app/" target="_blank" rel="noreferrer">Captain America</a>
          <a href="https://codepen.io/starboy-sharma/pen/QozjaY" target="_blank" rel="noreferrer">News Design</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
