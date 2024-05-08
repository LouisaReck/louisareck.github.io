import React from "react";
import starbucksOverview from "../../assets/starbucksOverview.png";

const Overview = () => {
  return (
    <section className="section container">
      <h2 className="section__title">Project Overview</h2>
      <span className="section__subtitle">The Task</span>
      <p className="section__text-1">
        This project was part of the Human-Centred Design course at NUS. The
        task was to improve a business on campus using a human-centered design
        process. The aim was to understand user needs and find innovative
        solutions to meet those needs. We decided to improve a Starbucks cafe
        located on campus.
      </p>
      <h1 className="section__title-small section__text-1 container hmw">
        How might we create a collaborative and productive atmosphere for
        Starbucks customers?
      </h1>

      <img src={starbucksOverview} alt="" className="exhale__mockup" />
    </section>
  );
};

export default Overview;
