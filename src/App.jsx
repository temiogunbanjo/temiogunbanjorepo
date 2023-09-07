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
import SuspenseFallback from "./components/SuspenseFallback";

import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";

import Therapy from "./layouts/therapy/Therapy";

const PortfolioIndex = React.lazy(() => import("./layouts/portfolio/Home"));
const PortfolioEducation = React.lazy(() => import("./layouts/portfolio/Education"));
const PortfolioIssues = React.lazy(() => import("./layouts/portfolio/Issues"));
const Projects = React.lazy(() => import("./layouts/portfolio/Projects"));
const BasicsOfProgramming = React.lazy(() => import("./layouts/Blogs/BasicsOfProgramming"));

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
                  <Route path="home" element={<PortfolioIndex />} />
                  <Route
                    path="home/education-history"
                    element={<PortfolioEducation />}
                  />
                  <Route path="issues" element={<PortfolioIssues />} />
                  <Route path="therapy" element={<Therapy />} />
                </Route>

                <Route path="/blogs" element={<Blogs />}>
                  <Route path="basics-of-programming" element={<BasicsOfProgramming />} />
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
