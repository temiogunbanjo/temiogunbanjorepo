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
import MoyinPortfolio from "./pages/Moyin/Portfolio";
import TemiPortfolio from "./pages/Temi/Portfolio";

import Therapy from "./layouts/therapy/Therapy";
import PortfolioIndex from "./layouts/portfolio/Temi/Home";
import PortfolioEducation from "./layouts/portfolio/Temi/Education";
import PortfolioAuth from "./layouts/portfolio/Auth";
import PortfolioIssues from "./layouts/portfolio/Temi/Issues";
import Projects from "./layouts/portfolio/Temi/Projects";

import MoyinPortfolioIndex from "./layouts/portfolio/Moyin/Home";
import MoyinPortfolioEducation from "./layouts/portfolio/Moyin/Education";

function App(props) {
  return (
    <MTP theme={muiTheme}>
      <AppContextProvider>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path="/" element={<Portfolio />}>
                <Route index element={<PortfolioAuth />} />
              </Route>

              <Route path="/temi" element={<TemiPortfolio />}>
                <Route index element={<PortfolioIndex />} />
                <Route path="home" element={<PortfolioIndex />} />
                <Route
                  path="education-history"
                  element={<PortfolioEducation />}
                />
                <Route path="issues" element={<PortfolioIssues />} />
                <Route path="therapy" element={<Therapy />} />
              </Route>

              {/* TEMI 3D PROJECT */}
              <Route path="/temi/projects" element={<Projects />} />

              <Route path="/moyin" element={<MoyinPortfolio />}>
                <Route index element={<MoyinPortfolioIndex />} />
                <Route path="home" element={<MoyinPortfolioIndex />} />
                <Route
                  path="education-history"
                  element={<MoyinPortfolioEducation />}
                />
              </Route>

              <Route path="*" element={<NoPage />} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </AppContextProvider>
    </MTP>
  );
}

export default App;
