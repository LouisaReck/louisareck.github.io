import React from "react";
import "./exhale.css";
import exhalegrid4 from "../../assets/exhalegrid4.png";
import exhalegrid5 from "../../assets/exhalegrid5.png";
import exhalegrid6 from "../../assets/exhalegrid6.png";
import exhaleMockup from "../../assets/exhaleMockup.png"

const Overview = () => {
  return (
    <section className="section container">
      <h2 className="section__title">Project Overview</h2>
      <span className="section__subtitle">The Task</span>
      <p className="section__text-1">
        This project was a part of the course Interaction Design at NUS. The
        task of this project was to design and prototype interactions that
        address a specific problem using a user-centric design methodology. The
        aim was to enhance our understanding of the interaction design process
        and apply it in practice.
        <br></br> <br></br>
        We focused on the fact that many students need help establishing and
        maintaining a consistent exercise habits despite their university
        providing various activities. This led to the development of the app
        Exhale, which aims to help and motivate students at NUS to develop a
        consistent exercise habit.
      </p>

      <img src={exhaleMockup} alt="" className="exhale__mockup" />

      {/* <div className="overview__cards container grid">
        <img className="card__image" src={exhalegrid4} />
        <img className="card__image" src={exhalegrid5} />
        <img className="card__image" src={exhalegrid6} />
      </div> */}
    </section>
  );
};

export default Overview;
