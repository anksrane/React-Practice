import React from "react";

const ThumbnailItem = ({ data, isActive, onClick }) => {
  return (
    <div
      className={`thumbnail-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={data.image} alt={data.title} />
      <div className="content">
        <h5 className="heading">{data.title}</h5>
      </div>
    </div>
  );
};

export default ThumbnailItem;
