import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import './About.css';

const skill = [
  { name: "React JS", icon: "/icons/react-svgrepo-com.svg" },
  { name: "Redux", icon: "/icons/redux-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/icons/js-svgrepo-com.svg" },
  { name: "JQuery", icon: "/icons/jquery-svgrepo-com.svg" },
  { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "/icons/css-3-svgrepo-com.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap-svgrepo-com.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind-svgrepo-com.svg" },
  { name: "GitHub", icon: "/icons/github-142-svgrepo-com.svg" },
  { name: "API Integration", icon: "/icons/api-settings-svgrepo-com.svg" },
];

function About() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power2.out", 
        delay: 0.2 
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div ref={containerRef} className="container skillset-container-outer">
      <div className="page-info">
        <h2 className="sub-heading">About Me</h2>
        <div className="line"></div>
        <p className="page-info-content">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </p>
      </div>

      <div className="skillset-container-inner">
        <div className="skill-text-container">
          <h3 className="skill-heading">Know About Me!</h3>
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
        <div className="textsphere-container">
          <h3 className="skill-heading">My Skills</h3>
          <div className="skill-item-container">
            {skill.map((item, index) => (
              <div key={index} className="skill-item">
                <img src={item.icon} alt={item.name} className="img-responsive" />
                <p className="skill-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;