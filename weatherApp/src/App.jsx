import { useState,useEffect } from 'react'
import './App.css'
import { Search,Weather,Forecast } from './components'
import useWeatherInfo from './hooks/useWeatherInfo';

function App() {
  const [city,setCity]= useState("Mumbai");
  const [hourlyForecast,setHourlyForeCast]= useState([]);
  const weatherInfo= useWeatherInfo(city);
  

  useEffect(() => {
    if (weatherInfo) {
      console.log(weatherInfo);
      const currentTime = new Date();
      const hourlyTimes = weatherInfo.hourly.time;
      const hourlyTemperatures = weatherInfo.hourly.temperature_2m;
      const hourlyWeatherCode=weatherInfo.hourly.weather_code;

      const hourlyWeatherData = hourlyTimes.map((time, index) => ({
        time,
        temperature: hourlyTemperatures[index],
        code:hourlyWeatherCode[index]
      }));
      console.log(hourlyWeatherData);

      const next48HoursWeather = hourlyWeatherData.filter(item => {
        const itemTime = new Date(item.time);
        return itemTime > currentTime;
      }).slice(0, 48);

      setHourlyForeCast(next48HoursWeather);
      // console.log(next48HoursWeather);
    }
  }, [weatherInfo]);


  return (
    <>
      <main className='flex justify-center items-center'>
        <div className="w-fit p-[15px] rounded-md bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg container">
          {/* Search Section Start*/}
          <Search onSearch={setCity} />
          {/* Search Section End */}

          {/* Weather Section Start */}
          <Weather weatherInfo ={weatherInfo} city={city} />
          {/* Weather Section End */}

          {/* Hourly Forecast Start */}
          <div className="border-t-[1px] border-white hourly-forecast">
            <ul className="mt-3 gap-4 flex weather-list">
              {hourlyForecast.map((hourlyWeather, index) => (
                <Forecast key={index} hourlyWeather={hourlyWeather} />
              ))}
              
            </ul>
          </div>          
          {/* Hourly Forecast End */}
        </div>
      </main>
    </>
  )
}

export default App
