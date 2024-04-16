import React from "react";
import exhale5 from "../../assets/exhale5.png";

const Landing = () => {
  return (
    <section className="exhale section" id="exhale">
      <div className="landing__container container grid">
        <div className="landing__info">
          <h1 className="exhale__title">Exhale App</h1>

          <p className="exhale__description">
            A project from the Interaction Design course I took during my
            semester at the National University of Singapore (NUS). The result
            was a motivational fitness planner for NUS students.
          </p>

          <div className="landing__data">
            <div className="landing__icon">
              <i className="uil uil-clock"></i>
              <h3>Duration</h3>
              <p>4 months, 20%</p>
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

        <div className="exhale__img">
          <img src={exhale5} alt="" className="exhale__img-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
