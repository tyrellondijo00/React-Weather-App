import React, { useState } from "react";

// ICONS
import { WiDayRainWind } from "react-icons/wi";
import { FaExpandAlt, FaSearch } from "react-icons/fa";
// ICONS

// COMPONENTS
import WeatherIcon from "./Icon";
// COMPONENTS

// CONTEXT API
import { useStateContext } from "../contexts/ContextProvider";
// CONTEXT API

import "../App.css";
import axios from "axios";

const Sidebar = () => {
  const [location, setLocation] = useState(null);

  const [data, setData] = useState({
    main: {
      temp: "20",
    },
    sys: {
      country: "COUNTRY",
    },
    name: "City Name",
    coord: {
      lon: "00.00",
      lat: "00.00",
    },
    weather: {
      icon: "",
    },
  });

  const [iconId, seticonId] = useState("");

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e9f46ddf13344ba6fe404b5323503639&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e9f46ddf13344ba6fe404b5323503639&units=metric`;
      axios.get(url).then((response) => {
        setData({ ...data, ...response.data });
        seticonId(response.data.weather[0].icon);
      });
    }
  };

  const { activeMenu, currentColor } = useStateContext();

  return (
    <div className="h-screen flex flex-col relative bg-slate-200 dark:bg-slate-800">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 circle">
        {location === null ? (
          <h1
            className={`circle-font temp text-black font-semibold p-4 rounded-full ${
              activeMenu ? "text-xl p-4" : "text-3xl p-2"
            }`}
            style={{ background: currentColor }}
          >
            <WeatherIcon iconId={iconId} />
          </h1>
        ) : (
          <h1
            className={`circle-font temp text-black font-semibold p-4 rounded-full ${
              activeMenu ? "text-xl p-4" : "text-3xl p-2"
            }`}
            style={{ background: currentColor }}
          >
            <WeatherIcon iconId={iconId} />
          </h1>
        )}
      </div>

      <div
        className=" text-black basis-1/2 border-b-2"
        style={{ borderColor: currentColor }}
      >
        <div
          className={`h-12 px-4 inline-flex mt-4 ${
            !activeMenu && "px-5 items-center"
          } `}
        >
          <WiDayRainWind
            className={`cursor-pointer block float-left border-black border ${
              activeMenu ? "mr-2 p-1 text-4xl rounded" : "text-5xl text-end p-1"
            }`}
            style={{ background: currentColor }}
          />
          <h1
            className={`text-black logo origin-left font-medium text-2xl ${
              !activeMenu && "scale-0"
            }`}
          >
            Da Weather
          </h1>
        </div>

        <div
          className={`h-14 px-4 flex flex-col justify-center pt-6 ${
            !activeMenu && "items-center"
          }`}
        >
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
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              className={`text-base bg-transparent w-full text-black dark:text-white focus:outline-none ${
                !activeMenu && "hidden"
              }`}
            />
          </div>
        </div>

        <div
          className={`flex flex-col country-city justify-center ${
            activeMenu ? "px-4" : "px-0"
          }`}
        >
          <div
            className={` py-4 font-semi-bold  text-black text-4xl ${
              activeMenu
                ? "border-black dark:border-white border-t border-l border-r rounded-t-xl"
                : "border-0"
            }`}
            style={{ background: currentColor }}
          >
            <h1
              className={`text-white city text-center ${
                !activeMenu && "hidden"
              }`}
            >
              {data.name}
            </h1>
            <h1 className={`text-white ${activeMenu && "hidden"}`}>JBG</h1>
          </div>

          <div
            className={`text-lg font-medium py-2 text-black flex justify-between ${
              activeMenu
                ? "border-black dark:border-white border-b border-l border-r rounded-b-xl text-right pr-5"
                : "border-0 text-center"
            }`}
            style={{ background: currentColor }}
          >
            <div className="cord pl-4 text-white">
              <h5 className="text-sm">long : {data.coord.lon}</h5>
              <h5 className="text-sm">lat : {data.coord.lat}</h5>
            </div>
            <div>
              <h3 className={`text-white country ${!activeMenu && "hidden"}`}>
                {data.sys.country}
              </h3>

              <h3 className={`text-white ${activeMenu && "hidden"}`}>RSA</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" text-white basis-1/2 border-t-2 bg-slate-200 dark:bg-slate-800"
        style={{ borderColor: currentColor }}
      ></div>
    </div>
  );
};

export default Sidebar;
