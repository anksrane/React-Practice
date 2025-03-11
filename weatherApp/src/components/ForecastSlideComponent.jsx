import React from 'react'

const getWeatherCondition = (code) => {
    const conditions = {
        0: ["Clear Sky","weather-icons/clear.svg"],
        1: ["Mainly Clear","weather-icons/clear.svg"],
        2: ["Partly Cloudy","weather-icons/clouds.svg"],
        3: ["Overcast","weather-icons/mist.svg"],
        45: ["Fog","weather-icons/clouds.svg"],
        48: ["Depositing Rime Fog","weather-icons/clouds.svg"],
        51: ["Light Drizzle","weather-icons/moderate_heavy_rain.svg"],
        53: ["Moderate Drizzle","weather-icons/moderate_heavy_rain.svg"],
        55: ["Dense Drizzle","weather-icons/clouds.svg"],
        61: ["Slight Rain","weather-icons/clouds.svg"],
        63: ["Moderate Rain","weather-icons/clouds.svg"],
        65: ["Heavy Rain","weather-icons/clouds.svg"],
        71: ["Slight Snowfall","weather-icons/clouds.svg"],
        73: ["Moderate Snowfall","weather-icons/clouds.svg"],
        75: ["Heavy Snowfall","weather-icons/clouds.svg"],
        80: ["Slight Rain Showers","weather-icons/moderate_heavy_rain.svg"],
        81: ["Moderate Rain Showers","weather-icons/moderate_heavy_rain.svg"],
        82: ["Violent Rain Showers","weather-icons/rain.svg"],
        95: ["Thunderstorm","weather-icons/thunder_rain.svg"],
        96: ["Thunderstorm with Slight Hail","weather-icons/thunder_rain.svg"],
        99: ["Thunderstorm with Heavy Hail","weather-icons/thunder_rain.svg"],
    };
    return conditions[code] || "Unknown Weather"; // Default to "Unknown Weather"
};

function formatDateTime(inputDateTime) {
    const dateObj = new Date(inputDateTime);
    const datePart = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(dateObj);
    const timePart = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(dateObj).toLowerCase();
    let tempVar=[]
    tempVar.push(datePart);
    tempVar.push(timePart)
    return tempVar;
}

function ForecastSlideComponent({hourlyWeather}) {
    const time=formatDateTime(hourlyWeather.time);
    const temp=hourlyWeather.temperature;
    const condition = getWeatherCondition(hourlyWeather.code);
    
  return (
    <div className="">
        <p className="text-center text-white mb-2 time">{time[0]}</p>
        <p className="text-center text-white mb-2 time">{time[1]}</p>
        <img
          src={condition[1]}
          className="max-w-[50px] m-auto weather-img-small"
        />
        <p className="text-center text-white my-2 temp">
          {temp} <span> &deg;</span>
        </p>
    </div>
  )
}

export default ForecastSlideComponent
