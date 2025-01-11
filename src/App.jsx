import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Outlet,
} from "react-router-dom";

// Import styles
import "./App.css";
import "./assets/styles/clamp.min.css";

import AppContextProvider from "./context/provider";
import { ThemeProvider as MTP, theme as muiTheme } from "./context/MuiTheme";

// import react components
import SuspenseFallback from "./components/SuspenseFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/404Page";

import Portfolio from "./layouts/Portfolio";
import Blogs from "./layouts/Blogs";

import Therapy from "./pages/therapy/Therapy";

const PortfolioIndex = React.lazy(() => import("./pages/portfolio/Home"));
const PortfolioEducation = React.lazy(() =>
  import("./pages/portfolio/Education")
);
const PortfolioIssues = React.lazy(() => import("./pages/portfolio/Issues"));
const Projects = React.lazy(() => import("./pages/portfolio/Projects"));
const BasicsOfProgramming = React.lazy(() =>
  import("./pages/Blogs/BasicsOfProgramming")
);

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
                  <Route path="home" element={<Outlet />}>
                    <Route index element={<PortfolioIndex />} />
                    <Route
                      path="education-history"
                      element={<PortfolioEducation />}
                    />
                  </Route>
                  <Route path="issues" element={<Outlet />}>
                    <Route index element={<PortfolioIssues />} />
                    <Route path=":id" element={<PortfolioIssues />} />
                  </Route>
                  <Route path="therapy" element={<Therapy />} />
                </Route>

                <Route path="/blogs" element={<Blogs />}>
                  <Route
                    path="basics-of-programming"
                    element={<BasicsOfProgramming />}
                  />
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
