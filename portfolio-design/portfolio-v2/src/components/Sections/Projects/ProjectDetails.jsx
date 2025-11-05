import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import projectsData from "./projectsData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);
  useEffect(() => {
    console.log(project);
  }, [slug, project]);

  if (!project) {
    return (
      <div style={{ color: "#000", textAlign: "center", marginTop: "100px" }}>
        Project not found.
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <div className="split-container">
          <div className="left-panel">
            <div>
              <h1 className="proj-det-heading">{project.title}</h1>
              <p className="proj-det-desc">{project.longDesc}</p> 
              <div className="skills-container">
                <h4 className="tech-title">Techonologies: </h4>
                  {project.skills.map((skill, i) => (
                    i < project.skills.length - 1 
                      ? <p key={i} className="skill-item">{skill},</p> 
                      : <p key={i} className="skill-item">{skill}</p>
                  ))}
              </div> 
              {project.projLink?(<a href={project.projLink} className="proj-links" target="_blank"><FaLink /> Live Demo</a>):""}                  
              {project.gitHub?(<a href={project.gitHub} className="proj-links" target="_blank"><FaGithub /> Github Repo</a> ):""}                  
               
            </div>       
          </div>

          <div className="right-panel">
            <img src="https://placehold.co/1920x1080" alt="Project 1" />
            <img src="https://placehold.co/1920x1080" alt="Project 2" />
            <img src="https://placehold.co/1920x1080" alt="Project 3" />
            <img src="https://placehold.co/1920x1080" alt="Project 4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
