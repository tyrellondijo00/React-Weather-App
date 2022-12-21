import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  const { activeMenu } = useStateContext();
  return (
    <Router>
      <div className="flex relative dark:bg-main-dark-bg">
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
          className={`fixed md:static bg-blue navbar w-full navbar ${
            activeMenu ? "md:ml-72" : "flex-2 md:ml-20"
          }`}
        >
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;