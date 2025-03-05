import React from "react";

function Forecast() {
  return (
    <>
      <li>
        <p className="text-center text-white mb-2 time">00:00</p>
        <img
          src="weather-icons/clouds.svg"
          className="max-w-[30px] m-auto weather-img-small"
        />
        <p className="text-center text-white my-2 temp">
          30 <span> &deg;</span>
        </p>
      </li>
    </>
  );
}

export default Forecast;
