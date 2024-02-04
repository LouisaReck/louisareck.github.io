import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import bookitPage1 from "../../assets/bookitPage1.png";
import bookitPage2 from "../../assets/bookitPage2.png";
import bookitPage3 from "../../assets/bookitPage3.gif";
import bookitPage4 from "../../assets/bookitPage4.gif";
import bookitPage5 from "../../assets/bookitPage5.gif";
import bookitPage6 from "../../assets/bookitPage6.gif";
import bookitPage7 from "../../assets/bookitPage7.gif";
import bookitMenus from "../../assets/bookitMenus.png";

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
      <span className="section__subtitle">The Final Interface</span>
      <p className="section__text-1">
        The result of this project was Bookit, a website that streamlines the
        process of reserving rooms and equipment. The website also provides a
        filter option to search for available resources based on specific
        criteria such as time, date, and room or equipment type. Users can also
        conveniently book multiple rooms and equipment at once as well as share
        their bookings with others. Additionally, the website offers
        user-friendly features for easy creation, editing, and cancellation of
        bookings.
      </p>

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="result__container-bookit"
      >
        <SwiperSlide className="swiper__card">
          <img src={bookitPage1} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            The website's home page offers direct access to search and filter
            functionality
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={bookitPage2} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            On the "My Bookings" page, users can view and edit their active
            bookings
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={bookitPage3} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            The undo-feature ensures a user-friendly experience in case of
            deletions
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={bookitPage4} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            The user can search for a booking by location, date, and equipment
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={bookitPage5} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            The filtered results are presented as various booking options{" "}
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={bookitPage6} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            The filter offers a repeat pattern for automatic bookings
          </span>
        </SwiperSlide>
        <SwiperSlide className="swiper__card">
          <img src={bookitPage7} alt="" className="bookit__image" />
          <span className="swiper__subtitle-long">
            Once the booking is confirmed, users have the option to share it
          </span>
        </SwiperSlide>
      </Swiper>

      <div className="overview__img section container">
        <h3 className="section__title-small">Dropdowns & Popups</h3>
        <span className="section__subtitle">An overview</span>
        <img src={bookitMenus} alt="" className="overview__menu-img" />
      </div>
    </section>

    // <section className="section">
    //   <h2 className="section__title">Result</h2>
    //   <span className="section__subtitle">The Interface</span>

    //   <div className="section__container-bookit-1 container grid">
    //     <div className="section__data">
    //       <h2 className="section__title-bookit">Home Page</h2>
    //       <p className="section__text-2">
    //         The website's home page offers direct access to search and filter
    //         functionality, enabling users to easily find available resources
    //         that meet their specific needs even without logging in. However, to
    //         make new bookings and access current bookings, users must log in to
    //         the website.
    //       </p>
    //     </div>
    //     <div className="section__img-2-bookit">
    //       <img src={bookitPage1} alt="" className="result__img-img" />
    //       {/* <p className="about__img-text">Part of the affinity diagram</p> */}
    //     </div>
    //   </div>

    //   <div className="section__container-bookit-2 section container grid">
    //     <div className="section__img-2-bookit">
    //       <img src={bookitPage2} alt="" className="result__img-img" />
    //       {/* <p className="about__img-text">Part of the affinity diagram</p> */}
    //     </div>
    //     <div className="section__data">
    //       <h2 className="section__title-bookit">Home Page</h2>
    //       <p className="section__text-2">
    //         The website's home page offers direct access to search and filter
    //         functionality, enabling users to easily find available resources
    //         that meet their specific needs even without logging in. However, to
    //         make new bookings and access current bookings, users must log in to
    //         the website.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Result;
