import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

function Work() {
  const containerRefs = useRef([]);
  containerRefs.current = [];

  useEffect(()=>{
    const mm = gsap.matchMedia();
    console.log("GSAP Version:", gsap.version);
    console.log("Is ScrollTrigger Registered?", gsap.core.globals().ScrollTrigger ? "Yes" : "No");    

    gsap.timeline()
    .from(".work-section",{ opacity: 0, y: 50, duration: 0.8, ease: "power2.out" })
    .from(".sub-heading", { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" },"=-1") // Title animation
    .from(".line", { scaleX: 0, transformOrigin: "center", duration: 1, ease: "power2.out" }, "-=0.6"); // Line scaling

    // Responsive Animations
    mm.add("(min-width: 768px)", () => {
        containerRefs.current.forEach((card, index) => {
          const isEven = index % 2 === 1;
          const xValue = isEven ? 100 : -100;
  
          gsap.fromTo(card, { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.in",
            scrollTrigger: { trigger: card, start: "top 70%", stagger:true, toggleActions: "play none none reverse"}
          });
  
          gsap.fromTo(card.querySelector(".project-info"), { x: xValue, opacity: 0 }, {
            x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 50%", stagger:true, toggleActions: "play none none reverse"}
          });
  
          gsap.fromTo(card.querySelector(".project-image"), { x: -xValue, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 50%", stagger:true, toggleActions: "play none none reverse"}
          });
        });
      });
  
      mm.add("(max-width: 767px)", () => {
        containerRefs.current.forEach((card) => {
          gsap.fromTo(card, { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, ease: "power2.in",
            scrollTrigger: { trigger: card, start: "top 80%", stagger:true, toggleActions: "play none none reverse"}
          });
  
          gsap.fromTo(card.querySelector(".project-info"), { opacity: 0 }, {
            opacity: 1, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 70%", stagger:true, toggleActions: "play none none reverse"}
          });
  
          gsap.fromTo(card.querySelector(".project-image"), { opacity: 0 }, {
            opacity: 1, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 70%", stagger:true, toggleActions: "play none none reverse"}
          });
        });
      });
  
      return () => mm.revert();

  },[])
    
    return (
      <section className="work-section">
        <div className="custom-container">
            <div className="page-info">
                <h2 className="sub-heading">Things I’ve Worked on, Some of Them</h2>
                <div className="line"></div>
            </div>

            <div className="work-projects">
                {projects.map((project, index) => (
                    <div key={index} ref={(el) => (containerRefs.current[index] = el)}>
                        <ProjectCard project={project} isEven={index % 2 === 1} />
                    </div>
                ))}
            </div>
        </div>
      </section>
    );
  }

export default Work;