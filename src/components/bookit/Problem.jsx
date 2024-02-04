import React from "react";
import "./bookit.css";

const Problem = () => {
  return (
    <section className="section__exhale-problem section">
      {/* <div className="custom-shape-divider-top-1705866254">
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
      </div> */}

      <h2 className="section__title">Problem Statement</h2>
      <span className="section__subtitle">The Challenge</span>
      <p className="section__text-1">
        Balancing automatic booking and manual control during the booking
        process is crucial. The system should assist users in finding available
        rooms and allow for quick booking, while also enabling manual
        adjustments to room selection. Proper controls and feedback are
        necessary for effective interaction between automatic algorithms and
        user-controlled selection.
      </p>
    </section>
  );
};

export default Problem;
