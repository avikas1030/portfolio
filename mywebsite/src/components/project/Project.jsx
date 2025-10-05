import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div id="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* Airbnb project */}
          <div className="project-card">
            <img
              src="/airbnb.png"
              alt="Airbnb Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">Book Your Room (Airbnb)</h2>
              <p className="project-description">
                A full-stack Airbnb clone with user login, property listings, and booking features — built using modern frontend and backend technologies.
              </p>
              <a
                href="https://bookyourroom-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn green"
              >
                View Live
              </a>
            </div>
          </div>
          {/* Todo Web */}
          <div className="project-card">
            <img
              src="/todo.jpg"
              alt="Todo Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">TaskFlow – Smart ToDo Web App</h2>
              <p className="project-description">
                A MERN-based ToDo web app where users can register, log in, and manage their tasks seamlessly. Data is stored securely in MongoDB with full CRUD functionality.
              </p>
              <a
                href="https://prime-ai-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn green"
              >
                View Live
              </a>
            </div>
          </div>
          {/* UI/UX project */}
          <div className="project-card">
            <img
              src="/empireblue.png"
              alt="Empire Blue Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">Empire Blue – Modern UI Experience</h2>
              <p className="project-description">
                A visually appealing frontend project built to demonstrate elegant UI design and seamless user interaction using modern web technologies.
              </p>
              <a
                href="https://empire-inky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn yellow"
              >
                View Live
              </a>
            </div>
          </div>
          {/* JSON Builder project */}
          <div className="project-card">
            <img
              src="/json.jpg"
              alt="JSON Schema Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">JSON Schema Builder</h2>
              <p className="project-description">
                 A React and Ant Design-based tool to build and visualize JSON schemas interactively, featuring a responsive interface and fast performance powered by Vite.
              </p>
              <a
                href="https://json-builder-schema.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn yellow"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
