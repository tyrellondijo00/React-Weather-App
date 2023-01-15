import React from "react";

// CONTEXT API
import { useStateContext } from "../contexts/ContextProvider";
// CONTEXT API

const Weather = () => {
  // const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-lime-500 rounded-3xl">
      <div className="text-center">Weather</div>
    </div>
  );
};

export default Weather;
