
import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./home.css";
import Project from "../project/Project";
import Popup from "../popup/Popup";

const Home = () => {
  return (
    <div>
      <Nav />
      <Popup/>
      {/* Home Section */}
      <section id="home">
        <div className="home-container">
          {/* Intro */}
          <div className="intro">
            <h1 className="hello">Hello,</h1>
            <h2 className="name">I'm <span>Vikas Choudhary</span></h2>
            <h3 className="role">Software Developer</h3>
          </div>

          {/* Skills */}
          <div className="skills">
            <div className="marquee">
              <span>DSA</span>
              <span>CP</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Tailwind</span>
              <span>ReactJS</span>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Python</span>
              <span>OOPs</span>
              <span>Java</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          {/* About */}
          <div className="about">
            <h1>About Me</h1>
            <p>
              I am a <span className="highlight-green">Software Developer</span> passionate 
              about building full-stack applications, solving problems with{" "}
              <span className="highlight-blue">C++ & DSA</span>, and exploring{" "}
              <span className="highlight-yellow">DevOps & Cloud</span>.  
              My focus is on creating scalable solutions and continuously 
              improving my skills to deliver impactful software.
            </p>
          </div>
        </div>
      </section>
      <Project/>
      <Footer />
    </div>
  );
};

export default Home;
