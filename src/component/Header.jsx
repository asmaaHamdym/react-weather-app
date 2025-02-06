const Header = ({
  city,
  country,
  date,
  description,
  humidity,
  wind,
  iconUrl,
  temprature,
}) => {
  return (
    <>
      <div className="current-weather">
        <div>
          <h1 className="current-city" id="current-city">
            {city}, {country}
          </h1>
          <p className="current-details">
            <span id="current-date">{date}</span>,{" "}
            <span id="description">{description}</span>
            <br />
            Humidity: <strong id="humidity">{humidity}</strong>, Wind:
            <strong id="wind">{wind}</strong>
          </p>
        </div>
        <div className="current-temperature">
          <span>
            <img
              src={iconUrl}
              className="current-temperature-icon"
              alt="weather-icon"
            />
          </span>
          <span className="current-temperature-value">{temprature}</span>
          <span className="current-temperature-unit">°C</span>
        </div>
      </div>
    </>
  );
};

expoert default Header;