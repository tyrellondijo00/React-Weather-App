import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeSettings from "./components/ThemeSettings";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

function App() {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 480) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar sidebar h-screen border-r border-slate-200">
              <Sidebar />
            </div>
          ) : (
            <div className="w-20 fixed sidebar sidebar h-screen">
              <Sidebar />
            </div>
          )}

          <div
            className={`fixed md:static  navbar w-full navbar ${
              activeMenu ? "md:ml-72" : "flex-2 md:ml-20"
            }`}
          >
            <Navbar />
          </div>

          <div>{themeSettings && <ThemeSettings />}</div>
        </div>
      </Router>
    </div>
  );
}

export default App;
