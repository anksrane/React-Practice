import React from 'react';
// New code
import { icons } from '../../assets/images/icons';
import './Skills.css';

const skill = [
  { name: "React JS", icon: icons.reactIcon },
  { name: "Redux", icon: icons.reduxIcon },
  { name: "React-Router", icon: icons.routerIcon },
  { name: "JavaScript", icon: icons.jsIcon },
  { name: "API-Integration", icon: icons.apiIcons },  
  { name: "JQuery", icon: icons.jqueryIcons },
  { name: "HTML", icon: icons.htmlIcons },
  { name: "CSS", icon: icons.cssIcons },
  { name: "Bootstrap", icon: icons.bootstrapIcons },
  { name: "TailwindCSS", icon: icons.tailwindIcons },
  { name: "GSAP", icon: icons.gsapIcons },
  { name: "GitHub", icon: icons.gitIcons },
  { name: "NPM", icon: icons.npmIcons },
  { name: "Webpack", icon: icons.webpackIcons },
  { name: "Visual Studio", icon: icons.vsIcons },
  { name: "Photoshop", icon: icons.psIcons },
];

function Skills() {
  return (
    <div className='skills-section-outer-container'>
        <div className='container'>
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
  )
}

export default Skills
