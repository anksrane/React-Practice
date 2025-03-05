import React from "react";

function Weather({ weatherInfo }) {
  if (!weatherInfo || !weatherInfo.current) {
    return <p className="text-center text-gray-500">Enter a city to get weather info.</p>;
  }

  return (
    <div className="py-[30px] weather-container">
      <div className="current-weather">
        <img src="weather-icons/clouds.svg" className="m-auto weather-img" />
        <h2 className="text-center text-white mt-4 text-3xl font-[600] temp">
        {weatherInfo.current.temperature_2m} <span> &deg;C</span>
        </h2>
        <p className="text-center text-white mt-2 text-lg temp-type">
          Partly Cloudy
        </p>
        <h2 className="text-center text-white mt-4 text-2xl font-[600] cityname">
          Mumbai
        </h2>
      </div>
    </div>
  );
}

export default Weather;
