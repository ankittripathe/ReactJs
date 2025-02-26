import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

const SearchBox = () => {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ddcc8e1f7f025d45e354288d10477c26";

  const getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo()
  };

  return (
    <div className="SearchBox">
      <h2>Seach for the Weather</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
