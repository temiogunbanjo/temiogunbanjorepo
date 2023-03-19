import React from "react";
import "./pointer.css";

class PointerBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Click here to try my new dark/light mode",
      visibility: false,
    };
  }

  componentDidMount() {
    let timeout = Math.round(Math.random() * 30 + 8);

    let hidePointer = () => {
      this.setState({ visibility: false });
    };

    let showPointer = () => {
      this.setState({ visibility: true });
      setTimeout(hidePointer, 10000);
    };

    setTimeout(showPointer, timeout * 1000);
  }

  render() {
    return (
      <div className={`pointer-box ${this.state.visibility ? "" : "off"}`}>
        <div className="rows pointer-box-content">{this.state.text}</div>
      </div>
    );
  }
}

export default PointerBox;
