import "./therapy.css";

import React from "react";
import AppHeader from "../../components/header";
import PointerBox from "../../components/pointerbox";
import Footer from "../../components/footer";

// Import utilities
// import AppUtils from './Utils/AppUtils';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <main className="cols"></main>;
  }
}

class Therapy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader user={this.state.name} avatar={this.state.avatar} />
        <PointerBox />
        <Body
          user={this.state.name}
          avatar={this.state.avatar}
          setHomeComponentState={this.stateHandler}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Therapy;
