import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project, isEven }) {
  return (
    <div className={`project-card ${isEven ? "reverse" : ""}`}>
      {/* Left Section - Text */}
      <div className="project-info">
        <p className="project-tag"></p>
        <a href={project.link} className="project-title" target="_blank" rel="noopener noreferrer">
          {project.title} <i class="ri-links-line"></i></a>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
}

export default ProjectCard;