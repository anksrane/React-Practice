import { useEffect,useRef,useState } from "react";

function useWeatherInfo(cityName){
    const [weatherInfo, setWeatherInfo] = useState(null);
    const fetchRef= useRef(null);

    useEffect(()=>{
        if (!cityName) return;

        if (fetchRef.current === cityName) return; 
        fetchRef.current = cityName; // Store city to prevent duplicate fetch

        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

        fetch(geoUrl)
        .then(response => response.json())
        .then(data => {
            if (!data.results || data.results.length === 0) {
                throw new Error("City not found");
            }
            // console.log(data.results[0]);
            const { latitude, longitude } = data.results[0];
            // Now fetch weather forecast
            // const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&hourly=temperature_2m&timezone=auto`;
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;

            return fetch(weatherUrl)
        })
        .then(response => response.json())
        .then(data1=>{
            setWeatherInfo(data1);
        })
        .catch(error => {
            console.error(error);
            setWeatherInfo(null)
        });
    },[cityName]);

    return weatherInfo;
}

export default useWeatherInfo;