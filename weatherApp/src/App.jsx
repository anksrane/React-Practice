import { useState } from 'react'
import './App.css'
import { Search,Weather,Forecast } from './components'
import useWeatherInfo from './hooks/useWeatherInfo';

function App() {
  const [city,setCity]= useState("Mumbai");
  const weatherInfo= useWeatherInfo(city);
  console.log(weatherInfo);

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
            <ul className="mt-3 gap-3 flex weather-list">
              <Forecast />
              <Forecast />
              <Forecast />
            </ul>
          </div>          
          {/* Hourly Forecast End */}
        </div>
      </main>
    </>
  )
}

export default App
