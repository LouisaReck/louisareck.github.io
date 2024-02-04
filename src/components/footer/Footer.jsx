import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Reck</h1>

        {/* <ul className="footer__list">
          <li>
            <HashLink className="footer__link" to="/#portfolio">
              Projects
            </HashLink>
          </li>

          <li>
            <NavLink className="footer__link" to="/about">
              About
            </NavLink>
          </li>
        </ul> */}

        <div className="footer__social">
          <div className="contact__info">
            <div className="contact__card">
              <a href="mailto:louisareck@gmail.com" className="contact__button">
                <i className="fa-solid fa-square-envelope contact__card-icon"></i>
              </a>
              <span className="contact__card-data">louisareck@gmail.com</span>
            </div>

            <div className="contact__card">
              <i className="fa-solid fa-square-phone contact__card-icon"></i>

              <span className="contact__card-data">+46 73 026 22 40</span>
            </div>

            <div className="contact__card">

              <a href="https://www.linkedin.com/in/louisa-reck-903b9a17b/">
                <i className="fa-brands fa-linkedin contact__card-icon"></i>
              </a>
              <span className="contact__card-data">Louisa Reck</span>
            </div>
          </div>
        </div>

        <span className="footer__copy">
          {" "}
          This Website was made with React. <br />
          &#169; 2023 Louisa Reck
        </span>
      </div>
    </footer>
  );
};

export default Footer;
