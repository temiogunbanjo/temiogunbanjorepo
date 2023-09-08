import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

// Import styles
import "./App.css";
import "./assets/styles/clamp.min.css";

import AppContextProvider from "./context/provider";
import { ThemeProvider as MTP, theme as muiTheme } from "./context/MuiTheme";

// import react components
import NoPage from "./components/404Page";
import ErrorBoundary from "./components/ErrorBoundary";
import SuspenseFallback from "./components/SuspenseFallback";

import Portfolio from "./pages/Portfolio";

import PortfolioIndex from "./layouts/portfolio/Home";

const PortfolioEducation = React.lazy(() => import("./layouts/portfolio/Education"));
const PortfolioIssues = React.lazy(() => import("./layouts/portfolio/Issues"));
const Projects = React.lazy(() => import("./layouts/portfolio/Projects"));

function App(props) {
  return (
    <MTP theme={muiTheme}>
      <AppContextProvider>
        <React.Suspense fallback={<SuspenseFallback />}>
          <ErrorBoundary>
            <Router>
              <Switch>
                <Route path="/" element={<Portfolio />}>
                  <Route index element={<PortfolioIndex />} />
                  <Route
                    path="home/education-history"
                    element={<PortfolioEducation />}
                  />
                  <Route path="issues" element={<PortfolioIssues />} />
                </Route>

                <Route path="/projects" element={<Projects />} />

                <Route path="*" element={<NoPage />} />
              </Switch>
            </Router>
          </ErrorBoundary>
        </React.Suspense>
      </AppContextProvider>
    </MTP>
  );
}

export default App;
