import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "./projectsData"; // create a shared file for data if needed
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
              <p>{project.desc}</p>  
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
