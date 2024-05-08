import React from "react";
import bookit1 from "../../assets/bookit1.png";


const Landing = () => {
  return (
    <section className="bookit section" id="bookit">
      <div className="landing__container container grid">
        <div className="landing__info">
          <h1 className="bookit__title">Bookit</h1>

          <p className="exhale__description">
            Bookit was an individual project in the course Graphical Interfaces
            at Chalmers. The task was to create a user interface design for a
            resource booking website.
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
              <p>Group of 4</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-wrench"></i>
              <h3>Tools</h3>
              <p> Figma </p>
            </div>
          </div>
        </div>

        <div className="bookit__img">
          <img src={bookit1} alt="" className="bookit__img-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
