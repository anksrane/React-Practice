import React from "react";
const NameList = ({ worklist, setSelectedWork }) => {

  return (
    <div className="name-list">
      {worklist.map((work) => (
        <div key={work.id} className="name-list-container">
        <div
          key={work.id}
          className="name-item"
          onMouseEnter={() => {
            setSelectedWork(work);
          }}// Change image on hover
          onClick={() => window.open(work.link, "_blank")} // Open link on click
        >
          {work.heading}
        </div>
        </div>
      ))}
    </div>
  );
}

export default NameList;