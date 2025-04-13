import React from "react";
import testimonialCSS from "./Testimonial.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import profile1 from "./../../assets/Testimonials-02.jpg";
import profile2 from "./../../assets/Testimonials-03.jpg";
import profile3 from "./../../assets/Testimonials-07.jpg";

function Testimonial() {
  return (
    <div className={`${testimonialCSS.Testimonial_wrapper} section`}>
      <h2>Exeptional Journey's with Travelia. </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        className={testimonialCSS.swiper}
      >
        <SwiperSlide>
          <div className={testimonialCSS.Testimonial_Container}>
            <div className={testimonialCSS.profile}>
              <img src={profile1} alt="profile-image" />
              <div className={testimonialCSS.detail}>
                <span>John Doe</span>
                <div className={testimonialCSS.rating}>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quisquam culpa consectetur.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={testimonialCSS.Testimonial_Container}>
            <div className={testimonialCSS.profile}>
              <img src={profile2} alt="profile-image" />
              <div className={testimonialCSS.detail}>
                <span>Kim</span>
                <div className={testimonialCSS.rating}>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quisquam culpa consectetur.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={testimonialCSS.Testimonial_Container}>
            <div className={testimonialCSS.profile}>
              <img src={profile1} alt="profile-image" />
              <div className={testimonialCSS.detail}>
                <span>John Doe</span>
                <div className={testimonialCSS.rating}>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quisquam culpa consectetur.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={testimonialCSS.Testimonial_Container}>
            <div className={testimonialCSS.profile}>
              <img src={profile3} alt="profile-image" />
              <div className={testimonialCSS.detail}>
                <span>Ananya</span>
                <div className={testimonialCSS.rating}>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quisquam culpa consectetur.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
