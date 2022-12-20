import React, { useState } from "react";

// ICONS
import { FaRegTimesCircle } from "react-icons/fa";
// ICONS

// CONTEXT API
import { useStateContext } from "../contexts/ContextProvider";
// CONTEXT API

import "../App.css";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="h-screen flex flex-col relative">
      {activeMenu && (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 circle">
            <h1 className="circle-font text-5xl text-white font-semibold bg-gray-500 p-4">
              17°
            </h1>
          </div>
          <div className="bg-red text-black basis-1/2">
            <div className="bg-black relative">
              <FaRegTimesCircle
                className="text-black text-3xl rounded-full absolute right-0 cursor-pointer"
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
