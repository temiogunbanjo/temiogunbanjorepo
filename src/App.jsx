import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Outlet,
  // Redirect
} from "react-router-dom";

// Import styles
import "./App.css";
import "./assets/styles/clamp.min.css";

import AppContextProvider from "./context/provider";

// import react components
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/404Page";

import Portfolio from "./pages/Portfolio";
import Therapy from "./layouts/therapy/Therapy";
import PortfolioIndex from "./layouts/portfolio/Index";

function App(props) {
  return (
    <AppContextProvider>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/" element={<Portfolio />}>
              <Route index element={<PortfolioIndex />} />
              <Route path="therapy" element={<Therapy />} />
            </Route>

            <Route path="*" element={<NoPage />} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </AppContextProvider>
  );
}

export default App;
