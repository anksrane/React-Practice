import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes";
import { useSelector } from "react-redux";

import { FloatingBalls } from "./components";

function App() {
  const theme = useSelector((state) => state.theme.mode);

  // track screen size
  const [numBalls, setNumBalls] = useState(
    window.innerWidth > 580 ? 120 : 80
  );

  useEffect(() => {
    const handleResize = () => {
      setNumBalls(window.innerWidth > 580 ? 120 : 80);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <FloatingBalls numBalls={numBalls}/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
