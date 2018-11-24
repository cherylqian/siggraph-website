import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      Copyright {"\u00A9 " + new Date().getFullYear()} ACM SIGGRAPH UIUC
    </div>
  </footer>
);

export default Footer;
