import React from 'react'
import projectsData from './projectsData';
import ProjectCard from './ProjectCard';
import "./Projects.css";

function Projects() {
  return (
    <div className='project-section'>
        <div className="container">
            <h2 className="project-heading">Projects</h2>
            <div className="projects-outer-container">
                {projectsData.map((proj,index)=>(
                    <ProjectCard 
                        key={proj.id}
                        data={proj}
                        index={index}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
