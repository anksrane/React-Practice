import React from 'react'
import projectsData from './projectsData';
import ProjectCard from './ProjectCard';
import "./Projects.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {

    useGSAP(() => {
        // Animate heading
        gsap.from(".project-heading", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".projects-inner-container",
                start: "top 20%",
                toggleActions: "play none none none",
            },
        });

        // Animate all project cards
        gsap.from(".projectCard-inner-section", {
            opacity: 0,
            y: 30,
            scale: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".projects-inner-container",
                start: "top 20%",
                toggleActions: "play none none none",
            },
        });
    });

  return (
    <div className='project-section'>
        <div className="container">
            <div className="projects-inner-container">
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
    </div>
  )
}

export default Projects
