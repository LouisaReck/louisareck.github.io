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

const Process = () => {
  return (
    <section className="section section__process">
      <h2 className="section__title">Design Process</h2>
      <span className="section__subtitle">A summary</span>

      <div className="section__container container grid">
        <div className="section__data">
          <p className="section__text-2">
            The design process was divided into three different phases. The
            first phase consisted of infomration gathering and user studies in
            order to form a list of requirements. The second phase consisted of
            ideation and the development of concepts. The last phase included
            different evaluations with users such as a usability test and a
            survey.
          </p>
        </div>
        <div className="section__img-2">
          <img src={pendelnProcess} alt="" className="process__img" />
        </div>
      </div>

      <div className="section__container container section">
        <h2 className="section__title-small">Information Gathering</h2>
        <span className="section__subtitle">User studies</span>
        <p className="section__text-1">
          We started the project with an initial user study, interviewing 13
          people of different ages, genders, housing types, and electricity
          contracts. During the interviews, we found that various factors
          motivated the participants to reflect on their energy consumption,
          such as the economy and the environment. In addition, we conducted a
          literature study, and together with the information gathered from the
          user studies, we made a list of requirements for the prototype.
        </p>
      </div>

      <h2 className="section__title-small">Ideation & Concept development</h2>
      <span className="section__subtitle">From ideas to concepts</span>

      <div className="section__container container grid">
        <div className="section__data">
          <p className="section__text-2"></p>
          We started the ideation phase by brainstorming and brainwriting based
          on different focus areas. Together with BOID, we also held a workshop
          that focused on generating a lot of ideas and looking at the problem
          from various angles. After the quantitative idea generation, the
          process continued with more detailed and structured ideation sessions
          that focused more on how realizable the different ideas were.
          <br /> <br />
          Based on the result from the ideation phase, we created a
          morphological matrix utilizing the requirements gathered at the start
          of the project. The purpose of the matrix was to create innovative
          combinations of our ideas and to broaden them further. By combining
          functions and solutions, we created four new concepts.
        </div>
        <div className="section__img-2">
          <img src={pendelnIdeas} alt="" className="process__img" />
        </div>
      </div>

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="pendeln__container"
      >
        <SwiperSlide className="swiper__card">
          <img src={pendelnConcept1} alt="" className="concept__image" />
          <span className="swiper__subtitle-long">Concept 1</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={pendelnConcept2} alt="" className="concept__image" />
          <span className="swiper__subtitle-long">Concept 2</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={pendelnConcept3} alt="" className="concept__image" />
          <span className="swiper__subtitle-long">Concept 3</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={pendelnConcept4} alt="" className="concept__image" />
          <span className="swiper__subtitle-long">Concept 4</span>
        </SwiperSlide>
      </Swiper>

      <div className="section__container container section">
        <h2 className="section__title-small">Protoyping</h2>
        <span className="section__subtitle">An iterative Process</span>
        <p className="section__text-1">
          The concepts were finally narrowed down to a single concept which was
          chosen in large part due to its simplicity and feasibility. For this
          project, the ability to create a working prototype was also essential
          for testing, which had to be considered during concept selection.
        </p>

        <img src={pendelnPrototype} alt="" />
        <img src={pendelnInterface} alt="" />
      </div>

      <div className="section container">
        <h2 className="section__title-small">Evaluation</h2>
        <span className="section__subtitle">Three different methods</span>
        <p className="section__text-1">
          After extensive prototyping, we conducted three types of evaluations
          with different goals. Firstly, we sent out a survey to get
          quantitative data on how different colors were percieved from a gender
          perspective. The result from the survey was the basis for the design
          of the digital interface. Secondly, we conducted a usability test to
          evaluate the learnability of the digital interface. Lastly we tested
          the physical protoype in a real houshold for several days to see if it
          had the intended effect. After all the testing was done, we analyzed
          the results and did some adjustments to the final result.
        </p>
      </div>
    </section>
  );
};

export default Process;
