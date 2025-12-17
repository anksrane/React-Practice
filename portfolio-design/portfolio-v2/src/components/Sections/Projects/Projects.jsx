import React, { useRef } from 'react';
import projectsData from './projectsData';
import ProjectCard from './ProjectCard';
import "./Projects.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const projectSectionRef= useRef(null);

    useGSAP(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".projects-inner-container",
                    start: window.innerWidth < 769 ? "top 75%" : "top 65%",
                    end: window.innerWidth > 769 ? "bottom bottom" : "50% bottom",
                    // scrub: window.innerWidth > 769 ? 1 : false,
                    toggleActions: "play none none none",
                }
            });

            tl.from(".project-heading", {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: "power2.out",
            });

            // Animate Line
            tl.fromTo(".line",
                { opacity: 0, y: 50, scaleX: 0, transformOrigin: "center", immediateRender: false },
                { opacity: 1, y: 0, duration: 0.6, scaleX: 1, ease: "power2.out" }
            );    

            tl.from(".projectCard-inner-section", {
                opacity: 0,
                y: 30,
                scale: 0.1,
                duration: 0.6,
                ease: "power2.out",
                scrub:1,
            });
        },{ scope: projectSectionRef }
    );

  return (
    <div className='project-section' ref={projectSectionRef}>
        <div className="container">
            <div className="projects-inner-container">
                <div className="heading-container">
                    <h2 className="project-heading">Projects</h2>
                    <div className="line"></div>
                </div>                
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
