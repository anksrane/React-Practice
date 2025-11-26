import React from 'react';
import { icons } from '../../assets/images/icons';
import './About.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skill = [
  { name: "React JS", icon: icons.reactIcon },
  { name: "Redux", icon: icons.reduxIcon },
  { name: "React-Router", icon: icons.routerIcon },
  { name: "JavaScript", icon: icons.jsIcon },
  { name: "API-Integration", icon: icons.apiIcons },  
  { name: "HTML", icon: icons.htmlIcons },
  { name: "CSS", icon: icons.cssIcons },
  { name: "Bootstrap", icon: icons.bootstrapIcons },
  { name: "TailwindCSS", icon: icons.tailwindIcons },
  { name: "GSAP", icon: icons.gsapIcons },
];

const tools=[
  { name: "GitHub", icon: icons.gitIcons },
  { name: "NPM", icon: icons.npmIcons },
  { name: "Webpack", icon: icons.webpackIcons },
  { name: "Vite", icon: icons.viteIcon },
  { name: "Visual Studio", icon: icons.vsIcons },
  { name: "Photoshop", icon: icons.psIcons },
];

function About() {
    const aboutSectionRef = useRef(null);

    useGSAP(
        (context) => {
                const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: context.selector(".about-section-inner-container"),
                    start: () => (window.innerWidth < 768 ? "top 50%" : "top 60%"),
                    end: "bottom bottom",
                    toggleActions: "play none none none",
                },
            });

            // Animate Heading
            tl.fromTo(
            ".about-heading",
            { opacity: 0, y: 50, immediateRender: false },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );

            // Animate Sub Text under heading
            tl.fromTo(
            ".page-info-content",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3"
            );

            // Animate about text block
            tl.fromTo(
            ".about-text",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
            "-=0.2"
            );

            // Animate skills + tools container (Right Side)
            tl.fromTo(
            ".skills-outer-container",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
            "-=0.3"
            );

            // Optional: animate each skill item with stagger
            tl.fromTo(
            ".skill-item",
            { opacity: 0, scale: 0.8, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
            "-=0.3"
            );
        },
        { scope: aboutSectionRef }
    );    
    
    return (
        <div className='about-section-outer-container' ref={aboutSectionRef} >
            <div className='container'>
            <div className='about-section-inner-container'>
                <h2 className='about-heading'>About Me</h2>
                {/* <div className="line"></div> */}
                <p className="page-info-content">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
                <div className="about-grid-container">
                    <div className="about-text">
                        <h3 className='about-subhead'>Know About Me!</h3>
                        <p className="skills-content">
                            Greetings! I'm a front-end developer passionate about building dynamic and user-friendly web applications. My expertise includes React.js, Redux, JavaScript, jQuery, API Integration, Bootstrap, TailwindCSS, HTML, and CSS, enabling me to create seamless and responsive digital experiences.
                        </p>
                        <p className="skills-content">
                            With a strong focus on efficient state management, smooth API communication, and elegant UI design, I develop scalable and maintainable solutions that enhance user engagement. Whether it's crafting polished interfaces with Bootstrap and TailwindCSS or optimizing performance with React and Redux, I ensure every project is both functional and visually appealing.
                        </p>
                        <p className="skills-content">
                            I’m always eager to expand my knowledge and explore emerging technologies to stay at the forefront of web development. If you're looking for a dedicated developer to bring your vision to life, let's connect and create something amazing together!
                        </p>
                    </div>
                    <div className='skills-outer-container'>
                        <h3 className='about-subhead'>Skills</h3>
                        <div className="skill-item-container">
                            {skill.map((item, index) => (
                            <div key={index} className="skill-item">
                                <img src={item.icon} alt={item.name} className="img-responsive skill-icon" />
                                <p className="skill-name">{item.name}</p>
                            </div>
                            ))}
                        </div>
                        <h3 className='about-subhead'>Tools</h3>
                        <div className="skill-item-container">
                            {tools.map((item, index) => (
                            <div key={index} className="skill-item">
                                <img src={item.icon} alt={item.name} className="img-responsive skill-icon" />
                                <p className="skill-name">{item.name}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>  
    )
}

export default About
