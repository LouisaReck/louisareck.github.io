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
            This project is based on a user-centric design process. The process
            consisted of three different phases with several iterations. Firstly
            , we identified the problem and conducted user research. Then, we
            came up with ideas and solutions and created prototypes in Figma.
            The last phase consisted of evaluating and improving the final
            project.
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
