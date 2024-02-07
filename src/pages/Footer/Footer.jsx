import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <section>
      <div className="footer-distributed">
        <div className="footer-left">
          <img
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6493fc945ac55c5cf0b0243c_Logo.svg"
            alt=""
          />
          <p className="footer-links">
            <a href="/home" className="link-1">
              Home
            </a>
            <a href="/product">Produsts</a>
            <a href="/contact-page">About</a>
            <a href="cart">Cart</a>
            <a href="/sign-up">Join us</a>
          </p>
          <p className="footer-company-name">CRESCENDO © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>234 E. Rehmanpura</span> Wahdat Road, Lahore
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+92-306-4412263</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:meetjunaidrehman@gmail.com">
                meetjunaidrehman@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <a href="#/product">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
