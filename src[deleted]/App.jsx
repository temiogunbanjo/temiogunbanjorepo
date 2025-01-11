import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import styles
import "./App.css";
import "./resources/styles/clamp.min.css";

// import react components
import AppContextProvider from "./context/provider";
import Portfolio from "./layouts/portfolio/Portfolio";
import Therapy from "./layouts/therapy/Therapy";

function App(props) {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="therapy" element={<Therapy />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
