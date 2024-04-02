import React from "react";
import starbucks1 from "../../assets/starbucks1.png";


const Landing = () => {
  return (
    <section className="starbucks section" id="starbucks">
      <div className="landing__container container grid">
        <div className="landing__info">
          <h1 className="exhale__title">Reimagine Starbucks</h1>

          <p className="exhale__description">
            A project from the course Human-Centred Design that i took during
            my exchange semester at the National University of Singapore (NUS). The
            result was a improved redesign of a Starbucks cafe.
          </p>

          <div className="landing__data">
            <div className="landing__icon">
              <i className="uil uil-clock"></i>
              <h3>Duration</h3>
              <p>6 weeks, 20%</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-users-alt"></i>
              <h3>Team</h3>
              <p>Group of 4</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-wrench"></i>
              <h3>Tools</h3>
              <p> Rhino, Blender </p>
            </div>
          </div>
        </div>

        <div className="starbucks__img">
          <img src={starbucks1} alt="" className="starbucks__img-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
