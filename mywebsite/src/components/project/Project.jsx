import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div id="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img
              src="/airbnb.png"
              alt="Airbnb Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">Project One</h2>
              <p className="project-description">
                A brief description of the project goes here. You can talk about
                the tech stack and features used in this project.
              </p>
              <a
                href="https://airbnb-zdg1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn green"
              >
                View Live
              </a>
            </div>
          </div>
          {/* project 2 */}
          <div className="project-card">
            <img
              src="/empireblue.png"
              alt="Empire Blue Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">Project One</h2>
              <p className="project-description">
                A brief description of the project goes here. You can talk about
                the tech stack and features used in this project.
              </p>
              <a
                href="https://empire-inky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn green"
              >
                View Live
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="project-card">
            <img
              src="/jsonSchema.png"
              alt="JSON Schema Project"
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-name">Project Two</h2>
              <p className="project-description">
                Another short description for the project. Highlight what makes
                it unique and the technologies you worked with.
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
