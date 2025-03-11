import React from "react";

function WeatherSkeleton() {
  return (
    <div className="py-[30px] weather-container">
      <div className="current-weather animate-pulse">
        <div className="w-20 h-20 bg-gray-400/30 rounded-full mx-auto"></div>
        <h2 className="text-center text-white mt-4 text-3xl font-[600] bg-gray-400/30 w-24 h-6 mx-auto rounded"></h2>
        <p className="text-center text-white mt-2 text-lg bg-gray-400/30 w-32 h-4 mx-auto rounded"></p>
        <h2 className="text-center text-white mt-4 text-2xl font-[600] bg-gray-400/30 w-40 h-6 mx-auto rounded"></h2>
      </div>
    </div>
  );
}

export default WeatherSkeleton;
