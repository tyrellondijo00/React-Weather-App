import React, { useState } from "react";

// ICONS
import { WiDayRainWind } from "react-icons/wi";
import { FaExpandAlt, FaSearch } from "react-icons/fa";
// ICONS

// CONTEXT API
import { useStateContext } from "../contexts/ContextProvider";
// CONTEXT API

import "../App.css";

const Sidebar = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="h-screen flex flex-col relative bg-slate-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 circle">
        <h1
          className={`circle-font text-black font-semibold bg-lime-400 p-4 ${
            activeMenu ? "text-5xl p-4" : "text-3xl p-2"
          }`}
        >
          17°
        </h1>
      </div>

      <div className=" text-black basis-1/2 border-b-2 border-lime-400">
        <div className={`h-12 px-4 inline-flex mt-4 `}>
          <WiDayRainWind
            className={`bg-lime-400 text-4xl rounded cursor-pointer block float-left border border-black ${
              activeMenu ? "mr-2 p-1" : "p-1"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-2xl ${
              !activeMenu && "scale-0"
            }`}
          >
            Da Weather
          </h1>
        </div>

        <div
          className={`h-14 px-4 flex flex-col justify-center bg-gray-100 pt-6 ${
            activeMenu && "items-center"
          }`}
        >
          <div
            className={`flex items-center rounded-md bg-slate-50 py-2 border border-black  ${
              activeMenu ? "px-4" : "px-2 bg-red"
            }`}
          >
            <FaSearch
              className={`text-lime-400 text-lg block cursor-pointer float-left ${
                activeMenu ? "mr-2" : "mr-0 "
              }`}
            />

            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-black focus:outline-none ${
                !activeMenu && "hidden"
              }`}
            />
          </div>
        </div>

        <div
          className={`flex flex-col country-city justify-center bg-gray-100 ${
            activeMenu ? "px-4" : "px-0"
          }`}
        >
          <div className="text-center py-4 font-semi-bold text-black text-4xl border-t border-l border-r rounded-t-md bg-lime-400 border-black">
            <h1 className={`text-black ${!activeMenu && "scale-0"}`}>
              Jo'burg
            </h1>
          </div>

          <div className="text-lg text-right font-medium pr-5 py-2 border-b border-l border-r text-black rounded-b-md bg-lime-400 border-black">
            <h3>South Africa</h3>
          </div>
        </div>
      </div>

      <div className=" text-white basis-1/2 border-t-2 border-lime-400 bg-slate-100"></div>
    </div>
  );
};

export default Sidebar;
