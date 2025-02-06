const displayDay = ({}) => {
  return (
    <div className="forecast">
      <h2>{city}</h2>
      <div className="forecast-days">
        
            <h1>
              {city}, {country}
            </h1>
            <h3>{condition.description}</h3>
            <img src={condition.icon_url} alt={condition.text} />
            <p>{condition.text}</p>
            <p>Max: {temperature.maxmum}°C</p>
            <p>Min: {temperature.minmun}°C</p>
          </div>
        
      </div>
    </div>
  );
};
export default displayDay;
