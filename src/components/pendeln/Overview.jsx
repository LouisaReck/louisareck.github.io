import React from "react";
import pendelnOverview from "../../assets/pendelnOverview.png"

const Overview = () => {
  return (
    <section className="section container">
      <h2 className="section__title">Project Overview</h2>
      <span className="section__subtitle">The projects background</span>
      <p className="section__text-1">
        This project was a part of my bachelor's thesis, where we created a
        digi-physical product for visualization of household energy consumption.
        The project was done in collaboration with the design studio BOID and
        was part of a more extensive initiative by the International Energy
        Agency. The aim was to create a product that could assist in lowering
        energy consumption while being norm-creative and challenge traditional
        gender roles in households.
      </p>
      <img src={pendelnOverview} alt="" />
    </section>
  );
};

export default Overview;
