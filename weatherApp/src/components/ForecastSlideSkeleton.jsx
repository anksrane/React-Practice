import React from "react";

function ForecastSlideSkeleton() {
  return (
    <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center shadow-md animate-pulse">
      <div className="w-16 h-4 bg-gray-400/30 rounded mb-2"></div>
      <div className="w-12 h-4 bg-gray-400/30 rounded mb-2"></div>
      <div className="w-12 h-12 bg-gray-400/30 rounded-full mb-2"></div>
      <div className="w-10 h-4 bg-gray-400/30 rounded mt-2"></div>
    </div>
  );
}

export default ForecastSlideSkeleton;