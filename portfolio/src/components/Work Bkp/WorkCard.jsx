import React from "react";

function WorkCard({work}) {
  return (
    <div className="col-md-6">
      <a className="image-container" href={work.link}>
        <img src={work.src} alt={work.heading} className="img-fluid" />
        <div className="overlay">
          <h2>{work.heading}</h2>
        </div>
      </a>
    </div>
  );
}

export default WorkCard;
