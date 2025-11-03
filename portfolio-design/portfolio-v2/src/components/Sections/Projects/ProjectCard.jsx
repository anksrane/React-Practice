import React from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";

function ProjectCard({ data }) {
  return (
    <div className="projectCard-inner-section">
      <div className="projectCard-all-content">
          <img src={data.image} alt={data.slug} className="img-responsive prod-img"/>    
        <div className="proj-data-container">
          <pre className="code-block">
            <span className="keyword">const</span> <span className="variable">project</span> <span className="operator">=</span> <span className="bracket">&#123;</span>
            {"\n"}  <span className="property">id</span>: <span className="number">{data.id}</span>,
            {"\n"}  <span className="property">title</span>: <span className="string">"{data.title}"</span>,
            {"\n"}  <span className="property">status</span>: <span className="string">"{data.status}"</span>
            {"\n"}<span className="bracket">&#125;</span>;
          </pre>         
        </div>
      </div>
      <div className="projectCard-hover-content">
        <h3 className="project-hover-heading">
          {data.title}
        </h3>
        <NavLink
          // key={item.name}
          to={data.link}
          className='more-link'
        >More Details          
        </NavLink>         
      </div>
    </div>
  );
}

export default ProjectCard;
