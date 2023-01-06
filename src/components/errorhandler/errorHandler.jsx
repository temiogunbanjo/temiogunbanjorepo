import React from "react";
import AppHeader from "../components/header";
import ToggleFSButton from "../components/fullscreentogglerbutton";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log({ getDerivedStateFromError: error });
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService
    console.log(error, errorInfo);
  }

  render() {
    let h1WrapperStyle = {
      height: "70%",
      color: "#888",
      fontSize: "24px",
    };

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <AppHeader />
          <div className="cols center lg-100" style={h1WrapperStyle}>
            <h1 style={{ margin: "1rem 0" }}>An error occured</h1>
            <span>Please try refreshing your browser</span>
          </div>
          <ToggleFSButton />
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorHandler;