import React from "react";
import { Link } from "react-router-dom";
import { Mail, Facebook } from "react-feather";

const Footer = () => (
  <footer className="row">
    <div className="col">
      <Link to="/about">Who are we?</Link>
      <p>
        We are an official student chapter of ACM SIGGRAPH. We have an interest
        in all things computer graphics.
      </p>
    </div>
    <div className="col">
      <Link to="/about">Join us!</Link>
      <p>
        We are always looking to add new faces to our team. Come to one of our
        general meetings held every Monday at 7pm in 3401 Siebel Center.
      </p>
    </div>
    <div className="col">
      <a href="https://s2018.siggraph.org/conference/">SIGGRAPH conference</a>
      <p>
        At the SIGGRAPH conference, there is something to do and see for
        everyone. Find out more about this year's conference here and see why
        you should attend!
      </p>
    </div>
    <div className="col">
      <a
        className="d-flex"
        href="https://www-s.acm.illinois.edu/mailman/listinfo/siggraph-announce"
      >
        <Mail />
        <p className="ml-1">Join mailing list</p>
      </a>
      <a className="d-flex" href="https://www.facebook.com/uiucacmsiggraph">
        <Facebook />
        <p className="ml-1">Like us on Facebook</p>
      </a>
    </div>
  </footer>
);

export default Footer;
