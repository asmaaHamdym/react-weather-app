import { useState, useEffect } from "react";
import axios from "axios";
import formatDate from "./formatTimestamp";

const FiveDayForcast = ({ city }) => {
  const [weatherForcastData, setWeatherForcastData] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setWeatherForcastData(response.data.daily);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {weatherForcastData.slice(1, 6).map((day, index) => (
        <div key={index}>
          <div className="weather-forecast-col">
            <p className="weather-forecast-date">{formatDate(day.time).day}</p>
            <img
              className="weather-forecast-icon"
              src={day.condition.icon_url}
            />
            <div className="weather-forecast-temperatures">
              <p className="weather-forecast-temperature">
                <strong>
                  {Math.round(Math.round(day.temperature.minimum))}º
                </strong>
              </p>
              <p className="weather-forecast-temperature">
                {Math.round(Math.round(day.temperature.maximum))}º
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FiveDayForcast;
