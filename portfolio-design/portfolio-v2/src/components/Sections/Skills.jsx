import { icons } from '../../assets/images/icons';
import './Skills.css';

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
  { name: "GitHub", icon: icons.gitIcons },
  { name: "NPM", icon: icons.npmIcons },
  { name: "Webpack", icon: icons.webpackIcons },
  { name: "Vite", icon: icons.viteIcon },
  { name: "Visual Studio", icon: icons.vsIcons },
  { name: "Photoshop", icon: icons.psIcons },
];

function Skills() {
  const sectionRef = useRef(null);

  useGSAP(
    (context) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: context.selector(".skills-section-inner-container"),
          start: "top 20%",
          toggleActions: "play none none none",
        }
      });
      tl.fromTo(
        ".skills-heading",
        { opacity: 0, y:50, ease: "power2.out" },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )  
      tl.fromTo(
        ".skill-item",
        { opacity: 0, y:30, scale: 0.1 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6}
      )      
    },
    { scope: sectionRef }
  );  

  return (
    <div className='skills-section-outer-container' ref={sectionRef}>
        <div className='container'>
          <div className='skills-section-inner-container'>
            <h2 className='skills-heading'>Skills & Tools</h2>
            <div className="skill-item-container">
                {skill.map((item, index) => (
                <div key={index} className="skill-item">
                    <img src={item.icon} alt={item.name} className="img-responsive skill-icon" />
                    <p className="skill-name">{item.name}</p>
                </div>
                ))}
            </div>
          </div>
        </div>
    </div>  
  )
}

export default Skills