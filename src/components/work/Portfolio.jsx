import React from "react";
import "./portfolio.css";
import Work from "./Work";

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent Works</span>

      <Work />
    </section>
  );
};

export default Portfolio;
