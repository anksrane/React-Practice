import React, {useContext} from 'react';
import { ProjectContext } from '../context/ProjectContext';

function ProjectList() {
  const {projects,setSelectedProjects}=useContext(ProjectContext);

  return (
    <ul style={{listStyle:'none',padding:0,textAlign:"center"}}>
      {projects && projects.length > 0 ? 
      projects.map((project)=>{
        <li key={project.id}
          onMouseEnter={()=>setSelectedProjects(project)}
          style={{ padding: "10px", cursor: "pointer", fontSize: "18px", fontWeight: "bold" }}
        >
          <a href={project.anchor}>{project.projectName}</a>
        </li>
      }):
      (
        <li>No projects found</li>
      )}
    </ul>
  )
}

export default ProjectList
