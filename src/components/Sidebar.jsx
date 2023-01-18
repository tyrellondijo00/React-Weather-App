import React, { useState } from "react";

// ICONS
import { WiDayRainWind } from "react-icons/wi";
import { FaExpandAlt, FaSearch } from "react-icons/fa";
// ICONS

import { Link, NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

// COMPONENTS
import WeatherIcon from "./Icon";
// COMPONENTS

// DUMMY DATA
import { links } from "../theme/colors";
// DUMMY DATA

// CONTEXT API
import { useStateContext } from "../contexts/ContextProvider";
// CONTEXT API

import "react-perfect-scrollbar/dist/css/styles.css";

import "../App.css";
import axios from "axios";
import SearchComp from "./Search";

const Sidebar = () => {
  const [location, setLocation] = useState(null);
  const [iconId, seticonId] = useState("");

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

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e9f46ddf13344ba6fe404b5323503639&units=metric`;

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

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
          <SearchComp
            location={location}
            activeMenu={activeMenu}
            currentColor={currentColor}
            setLocation={setLocation}
            data={data}
            setData={setData}
            seticonId={seticonId}
          />
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
        className=" text-white basis-1/2 border-t-2 bg-slate-200 dark:bg-slate-800 scrollable"
        style={{ borderColor: currentColor }}
      >
        <PerfectScrollbar direction="rtl">
          <div className="mt-12 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </PerfectScrollbar>
        <style>
          {`
          
          .ps__rail-y {
            right: 0 !important;
            width: 0.2em !important;
            background-color: #F5F5F5 !important;
          }
          .ps__thumb-y {
            width: 0.2em !important;
            background-color: ${currentColor} !important;
            border-radius: 10px !important;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Sidebar;
