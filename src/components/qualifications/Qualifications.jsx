import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 
                </div>
                <h3 className="qualification__title">
                  MSc, Interaction Design & Technologies
                </h3>
                <span className="qualification__subtitle">
                  Chalmers University of Technology{" "}
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - May 2023
                </div>
                <h3 className="qualification__title">Exchange Studies</h3>
                <span className="qualification__subtitle">
                  National University of Singapore
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2022
                </div>
                <h3 className="qualification__title">
                  BSc, Industrial Design Engineer
                </h3>
                <span className="qualification__subtitle">
                  Chalmers University of Technology
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> January 2024 -
                </div>
                <h3 className="qualification__title">Master Thesis</h3>
                <span className="qualification__subtitle">Spotfire</span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> January 2024 -
                </div>
                <h3 className="qualification__title">
                  Female Tech Engineer 2024
                </h3>
                <span className="qualification__subtitle">
                  Participant of CoGigs talent program
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Spring 2022
                </div>
                <h3 className="qualification__title">
                  Bechelor Thesis
                </h3>
                <span className="qualification__subtitle">
                  Product Design Studio Boid
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
                <h3 className="qualification__title">
                  Student Educational Committee
                </h3>
                <span className="qualification__subtitle">
                  Division of Industrial Design Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
