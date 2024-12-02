/* eslint-disable no-unused-vars */
import React from "react";
import "./Style.css";

function Slide({ image, active }) {
  return (
    <div className={`item ${active ? "active" : ""}`} data-attribute={image.src}>
      <img src={image.src} className="img-fluid" alt={image.src} />
      <div className="content">
        <p className="sm-heading">Design</p>
        <h2 className="heading">{image.heading}</h2>
        <p className="para">
          {image.description}
        </p>
      </div>
    </div>
  );
}

export default Slide;
