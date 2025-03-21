import React from "react";
import ProjectCard from "./ProjectCard";
import "./Work.css";
import img1 from "./../../assets/image/g20.jpg";  
import img2 from "./../../assets/image/vijay-tanks.jpg";
import img3 from "./../../assets/image/birla.jpg";
import img4 from "./../../assets/image/stockholding.jpg";

const projects = [
    {
        title: "G20",
        description:
            "Developed a multilingual platform to showcase Indian culture in the context of global democracy initiatives for the G20 summit.",
        techStack: ["JavaScript", "jQuery", "XML", "HTML5", "CSS3", "Bootstrap"],
        image: img1,
        link: "https://www.motherofdemocracyg20.com/" 
    },
    {
        title: "Vijay Tanks",
        description:
            "Developed and maintained a website for Vijay Tanks, a global industrial engineering company in the energy sector. The site highlights their offerings of storage tanks and process equipment.",
        techStack: ["JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap"],
        image: img2,
        link: "https://www.vijaytanks.com/"
    },
    {
        title: "Birla",
        description:
            "Built a dealer locator tool integrated with Google Maps for Birla A1, allowing users to easily locate dealers of Birla products across India.",
        techStack: ["JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap"],
        image: img3,
        link: "https://www.birlaa1.com/birla-a1-locator-dealer.php"
    },
    {
        title: "Stockholding",
        description:
            "Worked on a web application offering financial planning, wealth management, and investment solutions for a large financial services firm.",
        techStack: ["JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap"],
        image: img4,
        link: "https://www.stockholding.com/"
    },
];

function Work() {
    return (
      <section className="work-section">
        <div className="custom-container">
            <div className="page-info">
                <h2 className="sub-heading">Things I’ve Worked on, Some of Them</h2>
                <div className="line"></div>
            </div>

            <div className="work-projects">
                {projects.map((project, index) => (
                <ProjectCard key={index} project={project} isEven={index % 2 === 1} />
                ))}
            </div>
        </div>
      </section>
    );
  }

export default Work;