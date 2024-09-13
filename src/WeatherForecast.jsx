import './WeatherForecast.css';

const WeatherForecast = ({ day, icon, iconAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={icon} alt={iconAlt} />
      <p><span>Conditions: </span>{conditions}</p>
      <p><span>Time: </span>{time}</p>
    </div>
  );
}

export default WeatherForecast;
