import "./Card.css";
import Weather from "../assets/Weather.jpg";
import RobertoBrasero from "../assets/RobertoBrasero.jpg";
const Card = ({ showData, weather, forecast }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = day + "/" + month + "/" + year;

  let url = "";
  let iconUrl = "";

  if (showData) {
    url = "https://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
  }

  return (
    <section className="weather__container">
      {showData === true ? (
        <div className="weather__content">
          <div className="weather__img">
            <img src={Weather} width={300} height={400} alt="Weather" />
          </div>
          <article className="weather__info">
            <h3>{weather.name}</h3>
            <div className="weather__temperature">
              <h2>{(weather.main.temp - 273.15).toFixed(0)}ºC</h2>
              <img
                className="weather__icon"
                src={iconUrl}
                width={90}
                alt="Weather Icon"
              />{" "}
            </div>
            <p>{weather.weather[0].description}</p>
            <p>{date}</p>
          </article>
        </div>
      ) : (
        <div className="weather__error">
          <img src={RobertoBrasero} width={250}></img>
          <h2 className="weather__error__message">No results</h2>
        </div>
      )}
    </section>
  );
};

export default Card;
