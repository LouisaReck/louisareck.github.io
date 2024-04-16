import React from "react";
import "./exhale.css";
import exhaleProcess from "../../assets/exhaleProcess.png";

const Process = () => {
  return (
    <section className="section section__process">
      <h2 className="section__title">Design Process</h2>
      <span className="section__subtitle">A summary</span>

      <div className="section__container container grid">
        <div className="section__data">
          <p className="section__text-2">
            This project is based on a user-centred design process. The process
            consisted of three distinct phases with several iterations. First,
            we identified the problem and conducted user research. Then we
            generated ideas and solutions and prototyped in Figma. The last
            phase was to evaluate and improve the final prototype.
          </p>
        </div>
        <div className="section__img-2">
          <img src={exhaleProcess} alt="" className="process__img" />
        </div>
      </div>
    </section>
  );
};

export default Process;
