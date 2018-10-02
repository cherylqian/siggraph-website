import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Slider from "react-slick";

class App extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
        <Slider {...settings} className="mb-5">
          <img className="w-50" src={logo} alt="" />
          <img className="w-50" src={logo} alt="" />
        </Slider>
      </div>
    );
  }
}

export default App;
