import { useState,useEffect } from 'react'
import './App.css'
import { Search,Weather,ForecastContainer } from './components'
import useWeatherInfo from './hooks/useWeatherInfo';

function App() {
  const [city,setCity]= useState("Thane");
  const [hourlyForecast,setHourlyForeCast]= useState([]);
  const {data:weatherInfo,loading,error}=useWeatherInfo(city);

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
    }else{
      setHourlyForeCast([])
    }
  }, [weatherInfo]);


  return (
    <>
      <main className='flex justify-center items-center min-h-screen'>
        <div className="w-fit p-[20px] rounded-md bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg container">
          {/* Search Section */}
          <Search onSearch={setCity} />

          {/* Conditional Rendering */}
          {loading && (
            <p className="text-center text-white mt-6">Fetching weather data...</p>
          )}

          {error && (
            <p className="text-center text-red-400 mt-6">{error}</p>
          )}

          {!city && !loading && !error && (
            <p className="text-center text-gray-400 mt-6">Please enter a city to get weather updates.</p>
          )}

          {/* Weather & Forecast Section */}
          {weatherInfo && !loading && !error && (
            <>
              <Weather weatherInfo={weatherInfo} city={city} />
              <ForecastContainer hourlyForecast={hourlyForecast} />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App
