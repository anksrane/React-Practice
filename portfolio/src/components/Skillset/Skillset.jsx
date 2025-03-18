import React from 'react'
import TextSphere from "./TextSphere";
// import './Skillset.css'

function Skillset() {
  return (
    <div className='skillset-container-outer'>
        <div className="skillset-container-inner">
          <div className="skill-text-container">
            <p className="skills-content">
            I'm a front-end developer skilled in React.js, JavaScript, ES6+, and modern web technologies. I build dynamic, user-centric applications with smooth state management, API integrations, and responsive designs. From polished UI with Bootstrap to seamless routing and efficient data flow, I create intuitive and engaging web experiences. Always eager to expand my skill set, I'm continuously exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className="textsphere-container">
            {/* <TextSphere /> */}
            
          </div>
        </div>
    </div>
  )
}

export default Skillset
