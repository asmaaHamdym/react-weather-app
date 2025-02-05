import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [city, setCity] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind: "",
    icon: "",
  });

  const handleInputChange = (e) => {
    if (e.target.value) {
      setCity(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      const apiKey = "3c9b157d324o427adbae47ft0a08477e";
      const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setResponseStatus(true);
          setCity(res.data.city);
          setWeatherData({
            ...weatherData,
            temperature: res.data.daily[0].temperature.day,
            description: res.data.daily[0].condition.description,
            humidity: res.data.daily[0].temperature.humidity,
            wind: res.data.daily[0].wind,
            icon: res.data.daily[0].condition.icon_url,
          });
        }
      });
    } else {
      alert("Please enter a city!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="seacrh" onChange={handleInputChange} value={city} />
        <input type="submit" />
      </form>
      {responseStatus && (
        <div>
          <h1>Weather in {city}: </h1>
          <p>Temprature: {weatherData.temperature} °C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind.speed}km/h</p>
          <p>
            <img src={weatherData.icon} />
          </p>
        </div>
      )}
    </>
  );
};

export default Search;
