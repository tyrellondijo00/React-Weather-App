import React from "react";
import { WiDayRainWind } from "react-icons/wi";

const WeatherIcon = ({ iconId }) => {
  const apiKey = "e9f46ddf13344ba6fe404b5323503639";
  const iconUrl = `https://api.openweathermap.org/img/w/${iconId}.png?appid=${apiKey}`;

  return <img src={iconUrl} alt="Icon" />;
};

export default WeatherIcon;
