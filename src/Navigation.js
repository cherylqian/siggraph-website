import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import App from "./App";
import Projects from "./Projects";
import About from "./About";

const Navigation = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="container">
      <DefaultLayout exact path="/" component={App} />
      <DefaultLayout path="/projects" component={Projects} />
      <DefaultLayout path="/about" component={About} />
    </div>
  </Router>
);

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <React.Fragment>
          <Header />
          <Component {...matchProps} />
          <Footer />
        </React.Fragment>
      )}
    />
  );
};

const Construction = ({ match }) => <h1>This page is under construction</h1>;

export default Navigation;
