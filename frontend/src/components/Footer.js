import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="social">
        <a href="#"><img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" /></a>
        <a href="#"><img src="https://img.icons8.com/fluency/24/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="https://img.icons8.com/fluency/24/instagram-new.png" alt="Instagram" /></a>
      </div>
    </footer>
  );
}

export default Footer;