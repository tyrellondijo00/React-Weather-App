import React, { useState } from "react";

// ICONS
import { FaRegTimesCircle } from "react-icons/fa";
import { FaExpandAlt } from "react-icons/fa";
// ICONS

// CONTEXT API
import { useStateContext } from "../contexts/ContextProvider";
// CONTEXT API

import "../App.css";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  // const handleCloseSideBar = () => {
  //   if (activeMenu && screenSize <= 900) {
  //     setActiveMenu(false);
  //   }
  // };

  return (
    <div className="h-screen flex flex-col relative">
      {activeMenu ? (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 circle">
            <h1 className="circle-font text-5xl text-white font-semibold bg-lime-500 p-4">
              17°
            </h1>
          </div>

          <div className=" text-black basis-1/2 border-b-2 border-lime-400">
            <div className=" relative h-12 bg-slate-100 border-b border-b-slate-200">
              <FaRegTimesCircle
                className="text-lime-500 text-3xl rounded-full absolute right-3 top-2 cursor-pointer "
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
              />
            </div>

            <div className="flex flex-col px-4 country-city justify-center bg-gray-100">
              <div className="text-center py-4 font-semi-bold text-white text-4xl border-t border-l border-r rounded-t-md bg-lime-400">
                <h1>CapeTown</h1>
              </div>

              <div className="text-lg text-right font-medium pr-5 py-2 border-b border-l border-r text-white rounded-b-md bg-lime-400">
                <h3>South Africa</h3>
              </div>
            </div>
          </div>

          <div className=" text-white basis-1/2 border-t-2 border-lime-400 bg-slate-100"></div>
        </>
      ) : (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 circle">
            <h1 className="circle-font text-3xl text-white font-semibold bg-gray-500 p-2">
              17°
            </h1>
          </div>
          <div className=" text-black basis-1/2">
            <div className="bg-red relative h-12">
              <FaExpandAlt
                className="text-black text-xl rounded-full absolute right-3 top-2 cursor-pointer"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
              />
            </div>
          </div>
          <div className="bg-black text-white basis-1/2"></div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
