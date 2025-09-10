import React from "react";
import { BackgroundBoxes } from "./BackgroundBoxes";

export default function BackgroundBoxesDemo() {
  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden">
      {/* 🔹 Boxes Grid */}
      <BackgroundBoxes />

      {/* 🔹 Optional subtle overlay to dim background */}
      <div
        className="absolute inset-0 z-10 pointer-events-none
          [mask-image:radial-gradient(circle,white,transparent)]"
      />
    </div>
  );
}
