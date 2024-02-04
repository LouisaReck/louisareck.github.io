import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import wireframe2 from "../../assets/wireframe2.png";
import wireframe3 from "../../assets/wireframe3.png";
import individual2 from "../../assets/individual2.png";
import individual3 from "../../assets/individual3.png";

const Contribution = () => {
  return (
    <section className="contribution__section section">
      <h2 className="section__title-small">Individual Work</h2>
      <span className="section__subtitle">My individual work</span>
      <p className="section__text-1">
        I created individual wireframes and prototypes for user tasks two and
        three. After discussing everyone's individual work during the group
        evaluation, we ultimately decided to move forward with my overall design
        language and combined all the use cases into one protoype in Figma .
      </p>

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="contribution__container"
      >
        <SwiperSlide className="swiper__card">
          <img src={wireframe2} alt="" className="contribution__image" />
          <span className="swiper__subtitle">Wireframes for User Task 2</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={individual2} alt="" className="contribution__image" />
          <span className="swiper__subtitle">
            Individual Prototype User Task 2
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={wireframe3} alt="" className="contribution__image" />
          <span className="swiper__subtitle">Wireframes for User Task 3</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={individual3} alt="" className="contribution__image" />
          <span className="swiper__subtitle">
            Individual Prototype User Task 3
          </span>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Contribution;
