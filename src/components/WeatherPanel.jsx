import { useState } from "react";
import SearchBtn from "./SearchBtn";
import Card from "./Card";
const WeatherPanel = () => {
  let urlWeather =
    "http://api.openweathermap.org/data/2.5/weather?appid=f0c7b85dde5a75be0ec9ff6958f9fb44&lang=en";
  let cityUrl = "&q=";

  let urlForecast =
    "http://api.openweathermap.org/data/2.5/forecast?appid=f0c7b85dde5a75be0ec9ff6958f9fb44&lang=en";

  const [weather, setWeather] = useState([]);
  const [forecast, setCforecast] = useState([]);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLocation(loc);

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);

        setShow(false);
      });

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setCforecast(setCforecast);

        setShow(true);
      })
      .catch((error) => {
        console.log(error);

        setShow(false);
      });
  };
  return (
    <>
      <SearchBtn newLocation={getLocation} />
      <Card showData={show} weather={weather} forecast={forecast} />
    </>
  );
};

export default WeatherPanel;
