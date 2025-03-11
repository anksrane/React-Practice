import { useEffect,useRef,useState } from "react";

function useWeatherInfo(cityName){
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchRef= useRef(null);

    useEffect(()=>{
        if (!cityName) return;

        if (fetchRef.current === cityName) return; 
        fetchRef.current = cityName; // Store city to prevent duplicate fetch

        setLoading(true);
        setError(null);
        setWeatherInfo(null);

        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

        fetch(geoUrl)
        .then(response => response.json())
        .then(data => {
            if (!data.results || data.results.length === 0) {
                throw new Error("City not found");
            }
            const { latitude, longitude } = data.results[0];
            // fetch weather forecast
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto&hourly=temperature_2m,weather_code`;

            return fetch(weatherUrl)
        })
        .then(response => response.json())
        .then(data1=>{
            setWeatherInfo(data1);
        })
        .catch(err => {
            setError(err.message);
        })
        .finally(()=>setLoading(false));
    },[cityName]);

    return {data: weatherInfo, loading, error};
}

export default useWeatherInfo;