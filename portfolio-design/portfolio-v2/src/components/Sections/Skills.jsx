import React from 'react';
import reactIcon from '../../assets/images/icons/react-svgrepo-com.svg';
import reduxIcon from '../../assets/images/icons/redux-svgrepo-com.svg';
import routerIcon from '../../assets/images/icons/reactrouter.svg';
import jsIcon from '../../assets/images/icons/js-svgrepo-com.svg';
import jqueryIcons from '../../assets/images/icons/jquery-svgrepo-com.svg';
import htmlIcons from '../../assets/images/icons/html-5-svgrepo-com.svg';
import cssIcons from '../../assets/images/icons/css-3-svgrepo-com.svg';
import bootstrapIcons from '../../assets/images/icons/bootstrap-svgrepo-com.svg';
import tailwindIcons from '../../assets/images/icons/tailwind-svgrepo-com.svg';
import gsapIcons from '../../assets/images/icons/gsap.svg';
import gitIcons from '../../assets/images/icons/github-142-svgrepo-com.svg';
import npmIcons from '../../assets/images/icons/npm.svg';
import webpackIcons from '../../assets/images/icons/webpack.svg';
import apiIcons from '../../assets/images/icons/api-settings-svgrepo-com.svg';
import vsIcons from '../../assets/images/icons/vs-code-svgrepo-com.svg';
import psIcons from '../../assets/images/icons/photoshop-cc-logo-svgrepo-com.svg';

import './Skills.css';

const skill = [
  { name: "React JS", icon: reactIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "React-Router", icon: routerIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "API-Integration", icon: apiIcons },  
  { name: "JQuery", icon: jqueryIcons },
  { name: "HTML", icon: htmlIcons },
  { name: "CSS", icon: cssIcons },
  { name: "Bootstrap", icon: bootstrapIcons },
  { name: "TailwindCSS", icon: tailwindIcons },
  { name: "GSAP", icon: gsapIcons },
  { name: "GitHub", icon: gitIcons },
  { name: "NPM", icon: npmIcons },
  { name: "Webpack", icon: webpackIcons },
  { name: "Visual Studio", icon: vsIcons },
  { name: "Photoshop", icon: psIcons },
];

function Skills() {
  return (
    <section className='skills-section-outer-container'>
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
    </section>  
  )
}

export default Skills
