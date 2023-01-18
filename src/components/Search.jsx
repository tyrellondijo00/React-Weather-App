import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import { useState } from "react";

const SearchComp = (props) => {
  const location = props.location;
  const activeMenu = props.activeMenu;
  const currentColor = props.currentColor;
  const setLocation = props.setLocation;
  const data = props.data;
  const setData = props.setData;
  const seticonId = props.seticonId;

  const handleLocation = (location) => {
    setLocation(location);
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e9f46ddf13344ba6fe404b5323503639&units=metric`;
      axios.get(url).then((response) => {
        setData({ ...data, ...response.data });
        seticonId(response.data.weather[0].icon);
        handleLocation(data.lon, data.lat);
      });
    }
  };

  return (
    <div
      className={`flex items-center rounded-md py-2 ${
        activeMenu
          ? "px-4 border border-black dark:border-white bg-slate-50 dark:bg-slate-600"
          : "px-2 bg-transparent"
      }`}
    >
      <FaSearch
        className={`block cursor-pointer float-left ${
          activeMenu ? "mr-2 text-lg" : "mr-0 text-2xl"
        }`}
        style={{ color: currentColor }}
      />

      <input
        type="text"
        placeholder="Search"
        value={location || ""}
        onChange={(event) => {
          handleLocation(event.target.value);
          searchLocation(event.target.value);
        }}
        onKeyPress={searchLocation}
        className={`text-base bg-transparent w-full text-black dark:text-white focus:outline-none ${
          !activeMenu && "hidden"
        }`}
      />
    </div>
  );
};

export default SearchComp;
