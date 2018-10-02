import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Header from "./Header";
import Footer from "./Footer";

const Navigation = () => (
  <Router>
    <div>
      <DefaultLayout exact path="/" component={App} />
      <DefaultLayout path="/projects" component={Construction} />
      <DefaultLayout path="/news" component={Construction} />
      <DefaultLayout path="/about" component={Construction} />
    </div>
  </Router>
);

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="container">
          <Header />
          <Component {...matchProps} />
          <Footer />
        </div>
      )}
    />
  );
};

const Construction = ({ match }) => <h1>This page is under construction</h1>;

export default Navigation;
