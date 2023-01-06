import React from "react";

const WeatherIcon = ({ iconId }) => {
  const apiKey = "e9f46ddf13344ba6fe404b5323503639";
  const iconUrl = `https://api.openweathermap.org/img/w/${iconId}.png?appid=${apiKey}`;

  return <img src={iconUrl} alt="Weather icon" />;
};

export default WeatherIcon;
