import React from "react";

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
  return conditions[code] || "Unknown Weather"; // Default to "Unknown Weather"
};

function Forecast({useId,hourlyWeather}) {
  const time=hourlyWeather.time;
  const temp=hourlyWeather.temperature;
  const condition = getWeatherCondition(hourlyWeather.code);
  // console.log(`Time: ${time}, Temp: ${temp}, Condition: ${condition}`);
  return (
      <li key={useId}>
        <p className="text-center text-white mb-2 time">{time}</p>
        <img
          src={condition[1]}
          className="max-w-[50px] m-auto weather-img-small"
        />
        <p className="text-center text-white my-2 temp">
          {temp} <span> &deg;</span>
        </p>
      </li>
  );
}

export default Forecast;
