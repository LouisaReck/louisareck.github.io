import React from "react";
import pendelnResult1 from "../../assets/pendelnResult1.png";
import pendelnResult2 from "../../assets/pendelnResult2.png";

const Result = () => {
  return (
    <section className="section__result section">
      <div className="custom-shape-divider-top-1705866254">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h2 className="section__title">The Result</h2>
      <span className="section__subtitle">The Final Prototype</span>
      <div className="container">
        <p className="section__text-1">
          The final concept consists of a wall-mounted device with an E-ink
          display. Under the display, a ring is placed that moves upwards when
          household electricity consumption is raised and down when it is
          lowered.
        </p>
        <img src={pendelnResult1} alt="" />
        <p className="section__text-1 section">
          The digital interface mainly consists of four different pages, one of
          which is a screensaver. This screensaver forecasts the best and worst
          times to consume electricity for the next twelve hours.
        </p>
        <img src={pendelnResult2} alt="" />
      </div>
    </section>
  );
};

export default Result;
