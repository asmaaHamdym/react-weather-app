import { useState } from "react";
import axios from "axios";
import DayForcast from "./DayForcast";
import FiveDayForcast from "./FiveDayForcast";
import { formatTimestamp } from "./formatTimestamp";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind: "",
    icon: "",
  });
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value) {
      setCity(e.target.value);
    }
  };
  const getWeather = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then((res) => {
      console.log(res.data);
      console.log(new Date(res.data.time * 1000));
      if (res.status === 200) {
        setIsLoaded(true);
        setCity(res.data.city);
        setCountry(res.data.country);
        setWeatherData({
          ...weatherData,
          description: res.data.condition.description,
          humidity: res.data.temperature.humidity,
          wind: res.data.wind.speed,
          icon: res.data.condition.icon_url,
          temperature: res.data.temperature.current,
          date: formatTimestamp(res.data.time),
        });
      } else {
        setIsLoaded(false);
        setError(true);
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getWeather();
    } else {
      alert("Please enter a city!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="search-form">
        <input
          type="seacrh"
          placeholder="Enter a city.."
          required
          className="search-input"
          id="search-input"
          onChange={handleInputChange}
          value={city}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      {isLoaded && (
        <DayForcast
          city={city}
          country={country}
          date={`${weatherData.date.dayNameShort}, ${weatherData.date.time}`}
          description={weatherData.description}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
          iconUrl={weatherData.icon}
          temprature={Math.round(weatherData.temperature)}
        />
      )}
      {error && <h1>Can&apos;t find this city! 🤷‍♀️</h1>}
    </>
  );
};

export default WeatherApp;
