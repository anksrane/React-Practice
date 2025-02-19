import React from "react";
import ImageDisplay from "./ImageDisplay";
import NameList from "./NameList";
import { WorkProvider } from "../context/WorkContext";
import "./Work.css";

function Work() {
  return (
    <WorkProvider>
    <div className="app-container">
      <h1>Work</h1>
      <div className="content">
        <ImageDisplay /> 
        <NameList />
      </div>
    </div>
    </WorkProvider>
  );
}

export default Work;