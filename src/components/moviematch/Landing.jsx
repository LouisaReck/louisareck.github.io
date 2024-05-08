import React from "react";
import moviematch1 from "../../assets/moviematch1.png";

const Landing = () => {
  return (
    <section className="starbucks section" id="starbucks">
      <div className="landing__container container grid">
        <div className="landing__info">
          <h1 className="exhale__title">MovieMatch</h1>

          <p className="exhale__description">
            MovieMatch was a group project that was part of the course Mobile
            Computing where we designed and implemented a mobile application on
            the theme of collaborative interaction.
          </p>

          <div className="landing__data">
            <div className="landing__icon">
              <i className="uil uil-clock"></i>
              <h3>Duration</h3>
              <p>4 weeks, 50%</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-users-alt"></i>
              <h3>Team</h3>
              <p>Group of 5</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-wrench"></i>
              <h3>Tools</h3>
              <p>Flutter, VS code, Figma, Firebase </p>
            </div>
          </div>
        </div>

        <div className="starbucks__img">
          <img src={moviematch1} alt="" className="starbucks__img-img" />
        </div>
      </div>
    </section>
  );
};
export default Landing;
