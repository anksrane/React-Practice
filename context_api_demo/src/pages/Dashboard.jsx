import React from 'react';
import ImageContainer from "../components/ImageContainer";
import ProjectList from '../components/ProjectList';

function Dashboard() {
  return (
    <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
      <ImageContainer />
      <ProjectList />
    </div>
  )
}

export default Dashboard
