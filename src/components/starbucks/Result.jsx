import React from "react";
import starbucksResult1 from "../../assets/starbucksResult1.png";
import starbucksErgonomics from "../../assets/starbucksErgonomics.png";
import starbucksTouchPoints from "../../assets/starbucksTouchPoints.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import starbucksResult2 from "../../assets/starbucksResult2.png";
import starbucksResult3 from "../../assets/starbucksResult3.png";
import starbucksResult4 from "../../assets/starbucksResult4.png";
import starbucksResult5 from "../../assets/starbucksResult5.png";
import starbucksResult6 from "../../assets/starbucksResult6.png";
import starbucksResult7 from "../../assets/starbucksResult7.png";

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
      <span className="section__subtitle">Reimagine Starbucks </span>
      <div className="container">
        <p className="section__text-1">
          We redesigned the layout to create a co-sharing space between the
          Starbucks outlet and the collaborative space. At the same time, we
          aimed to have a clear and divided designated use of each space whereby
          diners only dine at the Starbucks side, and students only study at the
          collaborative workspace.
        </p>

        <img src={starbucksResult1} alt="" className="starbucks__overview" />

        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="pendeln__container"
        >
          <SwiperSlide className="swiper__card">
            <img src={starbucksResult2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper__card">
            <img src={starbucksResult3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper__card">
            <img src={starbucksResult4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper__card">
            <img src={starbucksResult5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper__card">
            <img src={starbucksResult6} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper__card">
            <img src={starbucksResult7} alt="" />
          </SwiperSlide>
        </Swiper>

        <p className="section__text-1 section">
          Anthropometry was also considered in our redesign of Starbucks and we
          designed every main touch point according to the average Singaporean
          physique.
        </p>

        <img src={starbucksTouchPoints} alt="" />
        <img src={starbucksErgonomics} alt="" />

        <p className="section__text-1">
          Renderings and CAD models made by Lim Pei Chin and Ong Yong Qing.
        </p>
      </div>
    </section>
  );
};

export default Result;
