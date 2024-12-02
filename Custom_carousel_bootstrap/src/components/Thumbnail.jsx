/* eslint-disable no-unused-vars */
import React from "react";
import "./Style.css"

function Thumbnail({image,active,onClick}) {
  return (
    <div className={`thumbnail-item ${active ? "active" : ""}`}  onClick={onClick}>
      <img src={image.src} />
      <div className="content">
        <h5 className="heading">{image.heading}</h5>
      </div>
    </div>
  );
}

export default Thumbnail;
