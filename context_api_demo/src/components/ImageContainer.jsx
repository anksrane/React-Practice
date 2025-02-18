import React , { useContext} from 'react';
import { ProjectContext } from '../context/ProjectContext';

function ImageContainer() {
  const { selectedProject }=useContext(ProjectContext);

  return (
    <div style={{textAlign:"center",marginBottom:"20px"}}>
      <img src={selectedProject.imgSrc} alt={selectedProject.projectName} width="300" height="200" />
      <h3>{selectedProject.projectName}</h3>
    </div>
  )
}

export default ImageContainer
