import React from "react";
import AppContext from "./AppContext";

import nullimgT from "../resources/images/nullimgT.png";

class AppContextProvider extends React.Component {
  state = {
    name: "What's my name?",
    username: "username",
    avatar: nullimgT,
    portfolio: {
      profession: null,
      bio: "Please wait. Loading all my data...",
      skills: [
        { isDummy: true },
        { isDummy: true },
        { isDummy: true },
        { isDummy: true },
        { isDummy: true },
        { isDummy: true },
      ],
      projects: [
        { isDummy: true },
        { isDummy: true },
        { isDummy: true },
        { isDummy: true },
      ],
    },
  };

  setPortfolioState = (data) => {
    const newPortfolioData = Object.assign(
      {},
      { ...this.state.portfolio },
      data
    );
    this.setState({ portfolio: newPortfolioData });
  };

  setAppState = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setPortfolioState: this.setPortfolioState,
          setAppState: this.setAppState,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
