import './App.css'

function App() {

  return (
    <>
      <main className='flex justify-center items-center'>
        <div className="w-fit p-[15px] rounded-md bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg container">
          {/* Search Section Start*/}
          <div className="flex items-center gap-[5px] search-container-outer">
            <button className='text-white border-[1px] px-[15px] py-[10px] rounded-md hover:bg-slate-50 hover:text-slate-900'><i className="ri-focus-3-line"></i></button>
              <form className='flex gap-[5px] search-container'>
                <input type="search" placeholder="Search for City Name" className='px-[10px] py-[10px] bg-transparent focus-visible:outline-none border-[1px] rounded-md text-white' />
                <button type='submit' className='text-white px-[15px] py-[10px] border-[1px] rounded-md hover:bg-slate-50 hover:text-slate-900'><i className="ri-search-line"></i>
                </button>
              </form>
          </div>
          {/* Search Section End */}


          {/* Weather Section Start */}
          <div className="py-[30px] weather-container">
            <div className="current-weather">
              <img src="weather-icons/clouds.svg" className='m-auto weather-img' />
              <h2 className="text-center text-white mt-4 text-3xl font-[600] temp">30 <span> &deg;C</span></h2>
              <p className='text-center text-white mt-2 text-lg temp-type'>Partly Cloudy</p>
              <h2 className="text-center text-white mt-4 text-2xl font-[600] cityname">Mumbai</h2>
            </div>
          </div>
          {/* Weather Section End */}

          {/* Hourly Forcast */}
          <div className="border-t-[1px] border-white hourly-forecast">
            <ul className='mt-3 gap-3 flex weather-list'>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
              <li>
                <p className="text-center text-white mb-2 time">00:00</p>
                <img src="weather-icons/clouds.svg" className='max-w-[30px] m-auto weather-img-small' />
                <p className="text-center text-white my-2 temp">30 <span> &deg;</span></p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
