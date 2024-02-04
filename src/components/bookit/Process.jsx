import React from "react";
import "./bookit.css";
import bookitProcess from "../../assets/bookitProcess.png";

const Process = () => {
  return (
    <section className="section section__process">
      <h2 className="section__title">Design Process</h2>
      <span className="section__subtitle">A summary</span>
      <div className=" section__container container grid">
        <div className="section__data">
          <p className="section__text-2">
            The problem statement and requirements were given at the beginning
            of the project, so my work began with benchmarking. I took
            inspiration from other booking resources such as TimeEdit and
            Airbnb. In addition I interviewed a teacher and a student to get an
            insight into their current experience of booking rooms and
            equipments.
            <br /> <br />
            After I had gathered some information, I started creating some
            wireframes. During the website design process, I also asked friends
            and family to try the prototype and give feedback on the overall
            design.
          </p>
        </div>
        <div className="section__img-2">
          <img src={bookitProcess} alt="" className="process__img" />
        </div>
      </div>
    </section>
  );
};

export default Process;
