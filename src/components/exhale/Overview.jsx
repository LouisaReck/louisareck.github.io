import React from "react";
import "./exhale.css";
import exhaleMockup from "../../assets/exhaleMockup.png";

const Overview = () => {
  return (
    <section className="section container">
      <h2 className="section__title">Project Overview</h2>
      <span className="section__subtitle">The Task</span>
      <p className="section__text-1">
        This project was a part of the course Interaction Design at NUS. The
        task of this project was to design and prototype interactions that
        address a specific problem using a user-centred design methodology. The
        aim was to improve our understanding of the interaction design process
        and apply it in practice.
        <br></br> <br></br>
        We focused on the fact that many students need help in establishing and
        maintaining consistent exercise habits, despite the variety of
        activities offered by their university. This led to the development of
        the Exhale app, which aims to help and motivate NUS students to develop
        a consistent exercise habit.
      </p>

      <img src={exhaleMockup} alt="" className="exhale__mockup" />
    </section>
  );
};

export default Overview;
