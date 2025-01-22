import React, { useEffect, useState } from "react";
import "./TextSphere.css";

const TextSphere = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  useEffect(() => {
    // Check if TagCloud is available globally from the CDN
    const loadTagCloud = () => {
      if (window.TagCloud) {
        const container = ".tagcloud";
        const texts = [
          "React.js", "JavaScript", "CSS", "HTML", "Redux", "State Management", "Routing",
          "Bootstrap", "Git", "AJAX", "JQuery", "VS Code", "JSX" , "API Integration", "ES6+"
        ];
        const options = { radius: 300,animation: false, };

        window.TagCloud(container, texts, options);
      } else {
        console.error("TagCloud not loaded.");
      }
    };

    // Ensure TagCloud is loaded from CDN before use
    if (window.TagCloud) {
      loadTagCloud();  // If already loaded, run it
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/tagcloud";
      script.onload = loadTagCloud; // Run loadTagCloud once script is loaded
      document.body.appendChild(script);
    }

    return () => {
      const cloud = document.querySelector(".tagcloud");
      if (cloud) cloud.innerHTML = "";
    };
  }, []);

  const handleMouseEnter = (text) => {
    setHoveredWord(text);
  };

  const handleMouseLeave = () => {
    setHoveredWord(null);
  };

  return (
    <div className="sphere-container">
      <div className="tagcloud">
        {hoveredWord && (
          <div className="hovered-word">
            <span>{hoveredWord}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSphere;
