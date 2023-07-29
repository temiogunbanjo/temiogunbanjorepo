import React from "react";
import AppContext from "./AppContext";

class AppContextProvider extends React.Component {
  state = {
    dayMode: 'day',
  };

  setDayMode = (mode = 'day') => {
    this.setState({ dayMode: mode });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setDayMode: this.setDayMode
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
