import React from "react";
import affinity from "../../assets/affinity.png";

const Research = () => {
  return (
    <section className="section">
      <h3 className="section__title-small">User Research</h3>
      <span className="section__subtitle">Three different methods</span>
      <p className="section__text-1">
        As our primary user group we chose students at NUS who want to work out,
        but end up not doing so. We used a combination of three different
        methods to conduct the user study: a survey and an interview together
        with a type of contextual inquiry.
        <br /> <br />
        Furthermore, we analyzed our data with an affinity diagram and
        identified four common issues for breaking out of an excercise habit or
        not starting one at all. These were: difficulty in finding activities,
        lack of available friends, struggles to stay consistent during stressful
        periods, and finding time in a tight schedule.
      </p>
    </section>
  );
};

export default Research;
