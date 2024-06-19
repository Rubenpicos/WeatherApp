import { useState } from "react";
import "./SearchBtn.css";

const SearchBtn = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please, enter a city");
      return;
    }

    newLocation(city);
    setCity("");
  };

  return (
    <div className="search__container">
      <form className="search__form" onSubmit={onSubmit}>
        <div className="search__input-container">
          <input
            className="search__input"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="search__button" type="submit">
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBtn;
