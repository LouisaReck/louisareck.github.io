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
        We further analyzed the data and created three key user tasks. For each
        task, we also created a scenario and a storyboard. In addition we also
        created two personas different personas for the primary user group to
        get a better understanding of the users.
      </p>

      <div className="usertask__container container grid">
        <div className="usertask__content">
          <div>
            <i className="uil uil-calender usertask__icon"></i>
            <h3 className="usertask__title">1. Plan activities</h3>
            <span className="usertask__description">
              Users should be able to easily plan and update their workout
              schedule based on preexisting plans and stress levels.
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
                      83% of survey respondents were not happy with their
                      workout schedule.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Our Survey found that 94% of students are motivated to
                      exercise by free time.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      The Interviews revealed the time allocation struggles,
                      with deadlines affecting schedules. Flexibility in
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
              Users should be able to input their incentives for working out in
              order to be motivated when necessary.
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
                      Users have different incentives for working out, and their
                      motivation should be sustained by using their incentives.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      The survey identified feeling good, enjoying the company
                      of friends, and taking a break as reasons for working out,
                      which can encourage users to follow through with plans or
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
              Users should be able to find thier universities sports activities
              based on interests and friends’ activities.
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
                      Interviews indicated socializing as a key motivator, but
                      users struggled to find fitting activities.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Users struggled to organize activities with friends, our
                      app has to provide a simple way to do so.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Our Survey found that social support is important,
                      promoting group exercise could be effective.
                    </p>
                  </li>
                  <li className="usertask__modal-point">
                    <i className="uil uil-info-circle usertask__modal-icon"></i>
                    <p className="usertask__modal-info">
                      Gym and NUS sports clubs were popular workout options
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
