import React from "react";
import podcaster1 from "../../assets/podcaster1.png"

const Landing = () => {
  return (
    <section className="starbucks section" id="starbucks">
      <div className="landing__container container grid">
        <div className="landing__info">
          <h1 className="exhale__title">Re-design of Podcaster</h1>

          <p className="exhale__description">
            This project was part of the course Usability and the goal was to improve the usability of the app Podcaster.
          </p>

          <div className="landing__data">
            <div className="landing__icon">
              <i className="uil uil-clock"></i>
              <h3>Duration</h3>
              <p>8 weeks, 50%</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-users-alt"></i>
              <h3>Team</h3>
              <p>Group of 4</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-wrench"></i>
              <h3>Tools</h3>
              <p>Adobe XD</p>
            </div>
          </div>
        </div>

        <div className="starbucks__img">
          <img src={podcaster1} alt="" className="starbucks__img-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
