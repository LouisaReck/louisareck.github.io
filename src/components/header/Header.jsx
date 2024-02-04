import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.css";

const Header = () => {
  /* =============== Change Background header =============== */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 560 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* =============== Toggle Menu =============== */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink className="nav__logo" to="/">
          {" "}
          Reck
        </NavLink>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {/* <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i className="uil uil-estate nav__icon"></i> Home
              </NavLink>
            </li> */}

            <li className="nav__item">
              <HashLink className="nav__link" to="/#portfolio">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </HashLink>
            </li>

            <li className="nav__item">
              <NavLink className="nav__link" to="/about">
                <i className="uil uil-user nav__icon"></i> About
              </NavLink>
            </li>

            {/* <li className="nav__item">
              <NavLink className="nav__link" to="/contact">
                <i className="uil uil-message nav__icon"></i> Contact
              </NavLink>
            </li> */}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
