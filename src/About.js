import React, { Fragment } from "react";
import { about } from "./data/data";

const About = () => {
  return (
    <Fragment>
      <h2>About Us</h2>
      {about.about}
      <h3>Exec</h3>
      <h3>Contact Us</h3>
    </Fragment>
  );
};

export default About;
