import React, { createContext, useState } from "react";
// Creating Context
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const projects = [
    { id: 1, projectName: "G20", imgSrc: "/src/assets/project-img/g20.jpg", anchor: "https://www.motherofdemocracyg20.com/" },
    { id: 2, projectName: "Vijay Tanks", imgSrc: "/src/assets/project-img/vijay-tanks.jpg", anchor: "https://www.vijaytanks.com/" },
    { id: 3, projectName: "Birla", imgSrc: "/src/assets/project-img/birla.jpg", anchor: "https://www.birlaa1.com/birla-a1-locator-dealer.php" },
    { id: 4, projectName: "Stockholding", imgSrc: "/src/assets/project-img/stockholding.jpg", anchor: "https://www.stockholding.com/" },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to first project

  return (
    <ProjectContext.Provider value={{ projects, selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
