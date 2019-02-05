import React, { Component } from "react";

import Background from "./Background";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentWillMount = () => {
    this.updateDimensions();
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    return (
      <div className="App">
        <div
          className="center-container"
          style={{ height: this.state.height * 0.9 }}
        >
          <h1 className="center w-100">SIGGRAPH @ UIUC</h1>
        </div>
        <Background />
      </div>
    );
  }
}

export default App;
