import React, { useState, useEffect } from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";
import ThumbnailItem from "./ThumbnailItem";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import "./Projects.css";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  // auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="projects-slider">
      <div className="slider">
        <div className="list">
          {projectsData.map((proj, index) => (
            <ProjectCard
              key={proj.id}
              data={proj}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        <div className="arrows">
          <button className="slide-btns" id="prev" onClick={prevSlide}>
            <FaAngleLeft className="slide-icons slide-pre"/>
          </button>
          <button className="slide-btns" id="next" onClick={nextSlide}>
            <FaAngleRight className="slide-icons slide-next"/>
          </button>
        </div>

        <div className="thumbnail">
          {projectsData.map((proj, index) => (
            <ThumbnailItem
              key={proj.id}
              data={proj}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
