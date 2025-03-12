import React from "react";
import WeatherSkeleton from "./WeatherSkeleton";

const getWeatherCondition = (code) => {
  const conditions = {
      0: ["Clear Sky","weather-icons/clear.svg"],
      1: ["Mainly Clear","weather-icons/clear.svg"],
      2: ["Partly Cloudy","weather-icons/clouds.svg"],
      3: ["Overcast","weather-icons/mist.svg"],
      45: ["Fog","weather-icons/clouds.svg"],
      48: ["Depositing Rime Fog","weather-icons/clouds.svg"],
      51: ["Light Drizzle","weather-icons/clouds.svg"],
      53: ["Moderate Drizzle","weather-icons/clouds.svg"],
      55: ["Dense Drizzle","weather-icons/clouds.svg"],
      61: ["Slight Rain","weather-icons/clouds.svg"],
      63: ["Moderate Rain","weather-icons/clouds.svg"],
      65: ["Heavy Rain","weather-icons/clouds.svg"],
      71: ["Slight Snowfall","weather-icons/clouds.svg"],
      73: ["Moderate Snowfall","weather-icons/clouds.svg"],
      75: ["Heavy Snowfall","weather-icons/clouds.svg"],
      80: ["Slight Rain Showers","weather-icons/clouds.svg"],
      81: ["Moderate Rain Showers","weather-icons/clouds.svg"],
      82: ["Violent Rain Showers","weather-icons/clouds.svg"],
      95: ["Thunderstorm","weather-icons/clouds.svg"],
      96: ["Thunderstorm with Slight Hail","weather-icons/clouds.svg"],
      99: ["Thunderstorm with Heavy Hail","weather-icons/clouds.svg"],
  };
  return conditions[code] || ["Unknown Weather", "weather-icons/no-result.svg"]; // Default to "Unknown Weather"
};

function Weather({ weatherInfo, city }) {
  if (!weatherInfo || !weatherInfo.current) {
    // Show skeleton loader before data is available
    return WeatherSkeleton;
  }

  // Once data is loaded, show actual weather information
  const temperature = weatherInfo.current.temperature_2m ?? "--";
  const weatherCode = weatherInfo.current.weather_code;
  const condition = getWeatherCondition(weatherCode);

  return (
    <div className="py-[10px] sm:py-[30px] weather-container">
      <div className="current-weather">
        <img src={condition[1]}
          onError={(e)=>(e.target.src="weather-icons/no-result.svg")}
        className="m-auto weather-img" alt={condition[0]} />
        <h2 className="text-center text-white mt-4 text-3xl font-[600] temp">
          {temperature} <span> &deg;C</span>
        </h2>
        <p className="text-center text-white mt-2 text-lg temp-type">
          {condition[0]}
        </p>
        <h2 className="text-center text-white mt-4 text-2xl font-[600] cityname">
          {city}
        </h2>
      </div>
    </div>
  );
}

export default Weather;
