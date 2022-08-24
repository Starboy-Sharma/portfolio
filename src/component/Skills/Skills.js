import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {

  let [skillText, setSkillText] = useState('✨ My Skills ✨');

  useEffect(() => {
    
    var isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    if (isMobileDevice) { 
      setSkillText('My Skills');
    }

  }, [skillText]);

  return (
    <section id="skills" className="skills">
      <h2>{skillText}</h2>

      <ul className="skills-list">
        <li className="md-chip md-chip-hover"> Node JS </li>
        <li className="md-chip md-chip-hover"> Express </li>
        <li className="md-chip md-chip-hover"> Microservices </li>
        <li className="md-chip md-chip-hover"> React </li>
        <li className="md-chip md-chip-hover"> MongoDB </li>
        <li className="md-chip md-chip-hover"> API </li>
        <li className="md-chip md-chip-hover"> Postgres SQL </li>
        <li className="md-chip md-chip-hover"> Socket.IO </li>
        <li className="md-chip md-chip-hover"> Javascript </li>
        <li className="md-chip md-chip-hover"> Seequelize </li>
        <li className="md-chip md-chip-hover"> Mongoose </li>
        <li className="md-chip md-chip-hover"> Git </li>
        <li className="md-chip md-chip-hover"> jQuery </li>
      </ul>
    </section>
  );
};

export default Skills;
