const FiveDayForcast = ({ day, icon, min, max }) => {
  return (
    <div className="weather-forecast-col">
      <p className="weather-forecast-date">{day}</p>
      <img className="weather-forecast-icon" src={icon} />

      <p className="weather-forecast-temperature">
        <strong>{Math.round(min)}º</strong>
      </p>
      <p className="weather-forecast-temperature">{Math.round(max)}º</p>
    </div>
  );
};
export default FiveDayForcast;
