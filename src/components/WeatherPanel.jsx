import { useState } from "react";
import SearchBtn from "./SearchBtn";
import Card from "./Card";

const WeatherPanel = () => {
  const urlWeatherBase =
    "http://api.openweathermap.org/data/2.5/weather?appid=f0c7b85dde5a75be0ec9ff6958f9fb44&lang=en";
  const urlForecastBase =
    "http://api.openweathermap.org/data/2.5/forecast?appid=f0c7b85dde5a75be0ec9ff6958f9fb44&lang=en";
  const cityUrl = "&q=";

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [show, setShow] = useState(false);

  const getLocation = async (loc) => {
    const weatherUrl = urlWeatherBase + cityUrl + loc;
    const forecastUrl = urlForecastBase + cityUrl + loc;

    try {
      const weatherResponse = await fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error("Weather data fetch failed");
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);

      const forecastResponse = await fetch(forecastUrl);

      const forecastData = await forecastResponse.json();
      setForecast(forecastData);

      setShow(true);
    } catch (error) {
      console.error(error);
      setShow(false);
    }
  };

  return (
    <>
      <SearchBtn newLocation={getLocation} />
      <Card showData={show} weather={weather} forecast={forecast} />
    </>
  );
};

export default WeatherPanel;
