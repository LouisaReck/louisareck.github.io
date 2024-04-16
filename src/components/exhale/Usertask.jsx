import React, { useState } from "react";
import "./exhale.css";

const Usertask = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="usertask section" id="usertask">
      <h2 className="section__title-small">Key User Tasks</h2>
      <span className="section__subtitle">The result of our user research</span>
      <p className="section__text-1">
        We further analysed the data and created three key user tasks. For each
        task we also created a scenario and a storyboard. We also created two
        different personas for the primary user group to get a better
        understanding of the users.
      </p>

      <div className="usertask__container container grid">
        <div className="usertask__content">
          <div>
            <i className="uil uil-calender usertask__icon"></i>
            <h3 className="usertask__title">1. Plan activities</h3>
            <span className="usertask__description">
              Users should be able to easily plan and update their workout
              schedule based on pre-existing plans and stress levels.
            </span>

            <span className="usertask__button" onClick={() => toggleTab(1)}>
              Read More
              <i className="uil uil-arrow-right usertask__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "usertask__modal active-modal"
                  : "usertask__modal"
              }
            >
              <div className="usertask__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times usertask__modal-close"
                ></i>

                <h3 className="usertask__modal-title">
                  1. Plan your activities
                </h3>

                <ul className="usertask__modal-points grid">
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      83% of survey respondents were not satisfied with their
                      workout schedule.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Our survey found that 94% of students have leisure time as
                      a motivator for physical activity.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      The interviews revealed the problems of time allocation,
                      with deadlines affecting the schedule. Flexibility in
                      planning is crucial for students.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="usertask__content">
          <div>
            <i className="uil uil-edit-alt usertask__icon"></i>
            <h3 className="usertask__title">2. Edit motivation </h3>
            <span className="usertask__description">
              Users should be able to set their own incentives for exercising to
              motivate them when needed.
            </span>

            <span onClick={() => toggleTab(2)} className="usertask__button">
              Read More
              <i className="uil uil-arrow-right usertask__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "usertask__modal active-modal"
                  : "usertask__modal"
              }
            >
              <div className="usertask__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times usertask__modal-close"
                ></i>

                <h3 className="usertask__modal-title">2. Edit motivation</h3>

                <ul className="usertask__modal-points grid">
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Our research found that users have different incentives
                      for exercising, and their motivation should be sustained
                      by using their incentives.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      The survey found that feeling good, enjoying the company
                      of friends and taking a break as reasons for exercising,
                      which can encourage users to stick to their plans or
                      schedule another workout.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="usertask__content">
          <div>
            <i className="uil uil-search usertask__icon"></i>
            <h3 className="usertask__title">3. Find activities</h3>
            <span className="usertask__description">
              Users should be able to find their university's sports activities
              based on their interests and friends' activities.
            </span>

            <span onClick={() => toggleTab(3)} className="usertask__button">
              Read More
              <i className="uil uil-arrow-right usertask__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "usertask__modal active-modal"
                  : "usertask__modal"
              }
            >
              <div className="usertask__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times usertask__modal-close"
                ></i>

                <h3 className="usertask__modal-title">3. Find activities</h3>

                <ul className="usertask__modal-points grid">
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Interviews revealed that socialising was a key motivator,
                      but users struggled to find suitable activities.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Users were struggling to organise activities with friends.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Our survey found that social support is important, so
                      promoting group exercise could be effective.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Gyms and NUS sports clubs were popular ways to exercise
                      among respondents (47%). The app should make it easy to
                      find NUS sport activities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usertask;
