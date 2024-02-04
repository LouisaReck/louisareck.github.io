import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import persona1 from "../../assets/persona1.png";
import persona2 from "../../assets/persona2.png";
import storyboard from "../../assets/storyboard.png";
import personas from "../../assets/personas.png"

const Persona = () => {
  return (
    <section className="persona container section">
      <h2 className="section__title-small">Storyboard & Personas</h2>
      <span className="section__subtitle">For the primary user group</span>
      <img src={personas} alt="" />

      

      {/* <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation ]}
        
        className="persona__container"
      >
        <swiper-clip>
        <SwiperSlide className="swiper__card">
          <img src={persona1} alt="" className="persona__image" />
          <span className="swiper__subtitle">Primary Persona</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={persona2} alt="" className="persona__image" />
          <span className="swiper__subtitle">Secondary Persona</span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={storyboard} alt="" className="persona__image" />
          <span className="swiper__subtitle">Storyboard for user task 3</span>
        </SwiperSlide>

        </swiper-clip>
      </Swiper> */}
    </section>
  );
};

export default Persona;
