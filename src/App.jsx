import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// Components

// Pages
import Weather from "./pages/Weather";
import Clouds from "./pages/Maps/Clouds";
import Precipitation from "./pages/Maps/Precipitation";
import Sealevel from "./pages/Maps/Sealevel";
import Temperature from "./pages/Maps/Temperature";
import Wind from "./pages/Maps/Wind";
// Pages

import ThemeSettings from "./components/ThemeSettings";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";
import "leaflet/dist/leaflet.css";
import "react-perfect-scrollbar/dist/css/styles.css";

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
    <div
      className={
        currentMode === "Dark" ? "dark bg-slate-900 h-screen" : "h-screen"
      }
    >
      <BrowserRouter>
        <div className="flex relative">
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
            <div>
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Main Page */}
                <Route path="/" element={<Weather />} />
                <Route path="/weather" element={<Weather />} />
                {/* Main Page */}

                {/* Weather Maps */}
                <Route path="/clouds" element={<Clouds />} />
                <Route path="/precipitation" element={<Precipitation />} />
                <Route path="/sealevel" element={<Sealevel />} />
                <Route path="/temperature" element={<Temperature />} />
                <Route path="/wind" element={<Wind />} />
                {/* Weather Maps */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
