import "./project-card.css";

import React from "react";
import { motion } from "framer-motion";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <i className="fi-rr-globe">
                  <span className="link-button-text">Project Link</span>
                </i>
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <i class="devicon-github-original-wordmark">
                  <span className="link-button-text">Github</span>
                </i>
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src={project.image}
        className="project-photo"
        alt=""
      />
    </div>
  );
}

export default ProjectCard;
