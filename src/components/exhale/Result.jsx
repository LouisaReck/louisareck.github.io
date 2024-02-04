import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import exhaleMockup from "../../assets/exhaleMockup.png";
import exhaleGif from "../../assets/exhaleGif.gif";
import usertask1_1 from "../../assets/usertask1-1.png";
import usertask1_2 from "../../assets/usertask1-2.png";
import usertask1_3 from "../../assets/usertask1-3.png";
import usertask2_1 from "../../assets/usertask2-1.png";
import usertask2_2 from "../../assets/usertask2-2.png";
import usertask2_3 from "../../assets/usertask2-3.png";
import usertask3_1 from "../../assets/usertask3-1.png";
import usertask3_2 from "../../assets/usertask3-2.png";
import usertask3_3 from "../../assets/usertask3-3.png";

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
      <div>
        <h2 className="section__title container">The Result</h2>
        <span className="section__subtitle">The Final App</span>
        <p className="section__text-1">
          The final result of teh project is a prototype of an application
          called Exhale. Exhale is the app for NUS students to easily plan and
          update their workout schedules, input their motivations for working
          out, and find NUS sports activities based on their interests and
          friends' activities, making it easier for them to develop a consistent
          exercise habit and achieve their fitness goals.
        </p>
        {/* <img src={exhaleGif} alt="" className="exhale__gif" /> */}
        {/* <img src={exhaleMockup} alt="" className="exhale__mockup container" /> */}
      </div>


        <h3 className="section__title-small">Find sports activities</h3>
        <span className="section__subtitle-margin">User Task 1</span>
        <div className="overview__cards container grid">
          <img className="card__image" src={usertask1_1} />
          <img className="card__image" src={usertask1_2} />
          <img className="card__image" src={usertask1_3} />
        </div>

        <h3 className="section__title-small">Plan your week</h3>
        <span className="section__subtitle-margin">User Task 2</span>
        <div className="overview__cards container grid">
          <img className="card__image" src={usertask2_1} />
          <img className="card__image" src={usertask2_2} />
          <img className="card__image" src={usertask2_3} />
        </div>

        <h3 className="section__title-small">Change what motivates you</h3>
        <span className="section__subtitle-margin">User Task 3</span>
        <div className="overview__cards container grid">
          <img className="card__image" src={usertask3_1} />
          <img className="card__image" src={usertask3_2} />
          <img className="card__image" src={usertask3_3} />
        </div>


      {/* <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="result__container"
      >
        <SwiperSlide className="swiper__card">
          <img src={exhaleDemo1} alt="" className="demo__image" />
          <span className="swiper__subtitle">Demo user task 1</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={exhaleDemo2} alt="" className="demo__image" />
          <span className="swiper__subtitle">Demo user task 2</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={exhaleDemo3} alt="" className="demo__image" />
          <span className="swiper__subtitle">Demo user task 3</span>
        </SwiperSlide>
      </Swiper> */}

      {/* <div className=" result__demo">
        <h2 className="section__title">Plan your activities</h2>
        <span className="section__subtitle">
          User Task 1
        </span>
        <div className="result__img">
          <img src={exhaleDemo1} alt="" className="result__img-img" />
        </div>
      </div>

      <div className="section result__demo">
        <h2 className="section__title">Plan your week</h2>
        <span className="section__subtitle">
          User Task 2
        </span>
        <div className="result__img">
          <img src={exhaleDemo2} alt="" className="result__img-img" />
        </div>
      </div>

      <div className="section result__demo">
        <h2 className="section__title">Change what motivates you</h2>
        <span className="section__subtitle">
          User Task 3
        </span>
        <div className="result__img">
          <img src={exhaleDemo3} alt="" className="result__img-img" />
        </div>
      </div> */}

      {/* 
      <div className="about__container container grid">
        <div className="about__data">
          <h3>Plan your activities</h3>
          <p className="about__description">
            Users are able to easily plan and update their workout schedule
            based on preexisting plans and stress levels.
          </p>
        </div>
        <div className="result__img">
          <img src={exhaleDemo1} alt="" className="result__img-img" />
        </div> 
      </div> */}
    </section>
  );
};

export default Result;
