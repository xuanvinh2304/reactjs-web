import React from 'react';
import BackToTop from "../BackToTop/BackToTop";
import './Footer.css';
function Footer() {
  return (
    <div className="footer">
      <span className="footer_items">Conditions of Use & Sale</span>
      <span className="footer_items">Privacy Note</span>
      <span className="footer_items">Intrest Based Ads</span>
      <span className="copyright">
        © 2001-2021, YourLife.dev, YL. or its affiliates
      </span>
      <div style = {{ marginTop: "40px" }}>
        <BackToTop />
      </div>
    </div>
  );
}
export default Footer;


