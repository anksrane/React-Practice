import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "./projectsData"; // create a shared file for data if needed

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
      <section className="project-details">
        {/* <div className="project-banner">
        <img src={project.image} alt={project.title} />
      </div> */}
        <div className="project-content">
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
          {/* add more fields like technologies, demo link, repo link, etc */}
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
