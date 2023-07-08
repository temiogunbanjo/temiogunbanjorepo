import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  // Outlet,
  // Redirect
} from "react-router-dom";

// Import styles
import "./App.css";
import "./assets/styles/clamp.min.css";

import AppContextProvider from "./context/provider";
import { ThemeProvider as MTP, theme as muiTheme } from "./context/MuiTheme";

// import react components
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/404Page";

import Portfolio from "./pages/Portfolio";

import Therapy from "./layouts/therapy/Therapy";
import PortfolioIndex from "./layouts/portfolio/Home";
import PortfolioEducation from "./layouts/portfolio/Education";
import PortfolioAuth from "./layouts/portfolio/Auth";
import PortfolioIssues from "./layouts/portfolio/Issues";
import Projects from "./layouts/portfolio/Projects";

function App(props) {
  return (
    <MTP theme={muiTheme}>
      <AppContextProvider>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path="/" element={<Portfolio />}>
                <Route index element={<PortfolioAuth />} />
                <Route path="home" element={<PortfolioIndex />} />
                <Route
                  path="home/education-history"
                  element={<PortfolioEducation />}
                />
                <Route path="issues" element={<PortfolioIssues />} />
                <Route path="therapy" element={<Therapy />} />
              </Route>

              <Route path="/projects" element={<Projects />} />

              <Route path="*" element={<NoPage />} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </AppContextProvider>
    </MTP>
  );
}

export default App;
