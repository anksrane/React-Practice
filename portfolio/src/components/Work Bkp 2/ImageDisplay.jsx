import React, { useState, useEffect } from "react";

const ImageDisplay = ({ selectedImage }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false); // Immediately reset loaded

    const timeout = setTimeout(() => {
      setLoaded(true); // Delay the fade-in effect
    }, 300); // Adjust delay in milliseconds (300ms = 0.3s)

    return () => clearTimeout(timeout); // Cleanup timeout on unmount/change
  }, [selectedImage]);

  return (
    <div className="image-container">
      <img
        src={selectedImage}
        alt="Selected Work"
        className={`img-fluid ${loaded ? "fade-in" : ""}`}
      />
    </div>
  );
};

export default ImageDisplay;