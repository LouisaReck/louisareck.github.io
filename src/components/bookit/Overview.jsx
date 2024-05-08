import React from "react";
import "./bookit.css";
import bookitOverview from "../../assets/bookitOverview.png";

const Overview = () => {
  return (
    <section className="section container">
      <h2 className="section__title">Project Overview</h2>
      <span className="section__subtitle">The projects background</span>
      <p className="section__text-1">
        This project was part of the Graphical Interfaces course. The aim was to
        design a resource booking website specifically for Chalmers University
        students and teachers. A critical aspect of the website was balancing
        automatic booking and manual control during the booking process.
        <br /> <br />
        In addition, the system should assist users in finding available rooms,
        allow for quick booking, and enable manual adjustments to room
        selection. Proper controls and feedback should also be implemented, as
        they are necessary for effective interaction between automatic
        algorithms and user-controlled selection.
      </p>
      <img src={bookitOverview} alt="" />
    </section>
  );
};

export default Overview;
