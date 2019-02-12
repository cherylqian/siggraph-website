import React, { Fragment } from "react";
import { about } from "./data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope);

const About = () => {
  return (
    <Fragment>
      <h2>About Us</h2>
      {about.about}
      <p className="h5 mt-3">Meet us on Mondays 7pm @ Siebel 3401!</p>
      <h3 className="mt-1">Exec</h3>
      <h3 className="mt-1">Contact Us</h3>
      <div>
        <a href="mailto:siggraphuiuc@gmail.com">
          <FontAwesomeIcon className="mr-3" icon="envelope" size="3x" />
        </a>
        <a href="https://www.facebook.com/uiucacmsiggraph/">
          <FontAwesomeIcon
            className="mr-3"
            icon={["fab", "facebook"]}
            size="3x"
          />
        </a>
        <a href="https://siggraphuiuc.slack.com">
          <FontAwesomeIcon className="mr-3" icon={["fab", "slack"]} size="3x" />
        </a>
      </div>
    </Fragment>
  );
};

export default About;
