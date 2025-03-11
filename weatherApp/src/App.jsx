import { useState,useEffect } from 'react'
import './App.css'
import { Search,Weather,Forecast,ForecastContainer } from './components'
import useWeatherInfo from './hooks/useWeatherInfo';

function App() {
  const [city,setCity]= useState("");
  const [hourlyForecast,setHourlyForeCast]= useState([]);
  const weatherInfo= useWeatherInfo(city);

  useEffect(() => {
    if (weatherInfo) {
      const currentTime = new Date();
      const hourlyTimes = weatherInfo.hourly.time;
      const hourlyTemperatures = weatherInfo.hourly.temperature_2m;
      const hourlyWeatherCode=weatherInfo.hourly.weather_code;

      const hourlyWeatherData = hourlyTimes.map((time, index) => ({
        time,
        temperature: hourlyTemperatures[index],
        code:hourlyWeatherCode[index]
      }));

      const next48HoursWeather = hourlyWeatherData.filter(item => {
        const itemTime = new Date(item.time);
        return itemTime > currentTime;
      }).slice(0, 48);

      setHourlyForeCast(next48HoursWeather);
    }
  }, [weatherInfo]);


  return (
    <>
      <main className='flex justify-center items-center'>
        <div className="w-fit p-[20px] rounded-md bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg container">
          {/* Search Section Start*/}
          <Search onSearch={setCity} />
          {/* Search Section End */}

          {/* Weather Section Start */}
          <Weather weatherInfo ={weatherInfo} city={city} />
          {/* Weather Section End */}

          {/* Hourly Forcast Swiper JS Start */}
          <ForecastContainer hourlyForecast={hourlyForecast} />
          {/* Hourly Forcast Swiper JS End */}
        </div>
      </main>
    </>
  )
}

export default App
