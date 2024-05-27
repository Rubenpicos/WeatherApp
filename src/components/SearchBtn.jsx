import { useState } from "react";
import "./SearchBtn.css";

const SearchBtn = ({ newLocation }) => {
  const [city, SetCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) {
      alert("Please, select a city");
    }

    newLocation(city);
  };

  return (
    <div className="search__container">
      <form className="search__form" onSubmit={onSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="City"
          onChange={(e) => SetCity(e.target.value)}
        ></input>
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBtn;
