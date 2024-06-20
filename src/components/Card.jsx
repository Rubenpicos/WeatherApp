import "./Card.css";
import Weather from "../assets/Weather.jpg";

const Card = ({ showData, weather, cityImage }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}/${month}/${year}`;

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
            <img
              src={cityImage || Weather}
              width={380}
              height={400}
              alt="City"
            />
          </div>
          <article className="weather__info">
            <h2 className="weather__info-name">{weather.name}</h2>
            <h4>{date}</h4>
            <div className="weather__temperature">
              <h2 className="weather__temperature-value">
                {(weather.main.temp - 273.15).toFixed(0)}ºC
              </h2>
              <img
                className="weather__icon"
                src={iconUrl}
                width={90}
                alt="Weather Icon"
              />
            </div>
            <p className="weather__description">
              <h2>{weather.weather[0].description}</h2>
            </p>
          </article>
        </div>
      ) : (
        <div className="weather__error">
          <h2 className="weather__error-message">No results</h2>
        </div>
      )}
    </section>
  );
};

export default Card;
