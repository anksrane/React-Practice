import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data, isActive }) => {
  return (
    <div className={`item ${isActive ? "active" : ""}`}>
      <img src={data.image} alt={data.title} className="img-responsive" />
      <div className="content">
        {/* <p className="sm-heading">Design</p> */}
        <h2 className="heading">{data.title}</h2>
        {/* <p className="para">{data.desc}</p> */}
        <NavLink
          // key={item.name}
          to={data.link}
          className='more-link'
        >More Details          
        </NavLink>        
      </div>
    </div>
  );
};

export default ProjectCard;