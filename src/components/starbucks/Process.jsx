import React from "react";
import pendelnProcess from "../../assets/pendelnProcess.png";
import pendelnIdeas from "../../assets/pendelnIdeas.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import pendelnConcept1 from "../../assets/pendelnConcept1.png";
import pendelnConcept2 from "../../assets/pendelnConcept2.png";
import pendelnConcept3 from "../../assets/pendelnConcept3.png";
import pendelnConcept4 from "../../assets/pendelnConcept4.png";
import pendelnPrototype from "../../assets/pendelnPrototype.png";
import pendelnInterface from "../../assets/pendelnInterface.png";

import starbucksAffinity from "../../assets/starbucksAffinity.png";
import starbucksPersona1 from "../../assets/starbucksPersona1.png";
import starbucksPersona2 from "../../assets/starbucksPersona2.png";

const Process = () => {
  return (
    <section className="section section__process">
      <div className="section__container container">
        <h2 className="section__title">User research</h2>
        <span className="section__subtitle">
          Observations, Interviews & Survey
        </span>
        <p className="section__text-1">
        We started the project by choosing a Starbucks cafe on campus and conducting user research. We observed the environment, interviewed two employees, and sent out a survey to 35 customers. We analyzed the gathered data with an Affinity Diagram. From the user research, we found that many customers are students who come to Starbucks to study, and only some feel obligated to buy food and drinks.
        </p>
      </div>

      <div className="usertask__container container grid">
        <div className="usertask__content">
          <div>
            <h1 className="exhale__title">65%</h1>
            <span className="usertask__description">
              of customers are from the College of design and engineering
            </span>
          </div>
        </div>
        <div className="usertask__content">
          <div>
            <h1 className="exhale__title">89%</h1>
            <span className="usertask__description">
              of customers come to Starbucks to study
            </span>
          </div>
        </div>
        <div className="usertask__content">
          <div>
            <h1 className="exhale__title">63%</h1>
            <span className="usertask__description">
              of customers feel obligated to buy food and drinks
            </span>
          </div>
        </div>
      </div>

      <div className="section container">
        <h2 className="section__title-small">
          Persona & Customer Experience Map
        </h2>
        <span className="section__subtitle">Identifying opportunities</span>
        <p className="section__text-1">
          To enhance our understanding of customer needs and pinpoint areas for
          business improvement, we developed two personas and corresponding
          customer experience maps. Our primary persona, Vanessa, is a student
          and our secondary persona, Priyanka, is a faculty member at NUS. Both
          personas are loyal Starbucks customers, prioritize convenience and
          express frustration with Starbucks' current layout.
        </p>
      </div>

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="pendeln__container"
      >
        <SwiperSlide className="swiper__card">
        <img src={starbucksPersona2} alt=""  />
          <span className="swiper__subtitle-long">Primary Persona</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          
        <img src={starbucksPersona1} alt="" />
          <span className="swiper__subtitle-long">Secondary Persona</span>
        </SwiperSlide>
      </Swiper>

      <p className="section__text-1 ">
          Identified opportunities applicable to both personas include
          attracting groups of all sizes and redesigning the layout. Vanessa's
          key opportunities are enhancing convenience through additional
          charging points and optimizing seating arrangements. On the other
          hand, Priyanka would benefit from the inclusion of comfortable seating
          options and designated spaces for dining privacy.
        </p>

    </section>
  );
};

export default Process;
