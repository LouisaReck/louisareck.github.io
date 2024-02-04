import React from "react";
import Pendeln1 from "../../assets/Pendeln1.png"

const Landing = () => {
  return (
    <section className="pendeln section" id="pendeln">
      <div className="landing__container container grid">
        <div>
          <h1 className="exhale__title">Household Energy Interface</h1>

          <p className="pendeln__description">
            This project was part of my Bachelor Thesis and was a collaboration
            with the design studio BOID. The task was to create a digi-physical
            product for visualization of household energy consumption.
          </p>

          <div className="landing__data">
            <div className="landing__icon">
              <i className="uil uil-clock"></i>
              <h2>Duration</h2>
              <p>18 weeks, 50%</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-users-alt"></i>
              <h2>Team</h2>
              <p>Group of 6</p>
            </div>
            <div className="landing__icon">
              <i className="uil uil-wrench"></i>
              <h2>Tools</h2>
              <p> Miro, Figma, Catia, Photoshop, User Studies</p>
            </div>
          </div>
        </div>

        <div className="pendeln__img">
          <img src={Pendeln1} alt="" className="pendeln__img-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
