import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import img from "../../images/product.png";
import { IoExtensionPuzzle } from "react-icons/io5";
// swiper css
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import css from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={css.container}>
      <h3>Recently Added Jobs:</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={4}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          856: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className={css.card}>
          <img src={img} alt="product" />
          <div className={css.desc}>
            <h4>Art Director</h4>
            <h5>Hermes International S.A</h5>
            <h5>
              <MdLocationOn />
              Harrisburg, Pennsylvania
            </h5>
          </div>
          <div className={css.reward}>
            <div>
              <p>$1,240</p>
              <span>of hiring reward </span>
            </div>
            <div className={css.icon}>
              <IoExtensionPuzzle />
            </div>
          </div>
          <div className={css.extra}>
            <h5>Be the first one to recommand!</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.card}>
          <img src={img} alt="product" />
          <div className={css.desc}>
            <h4>HR Head of Operations</h4>
            <h5>The Coca-cola Company</h5>
            <h5>
              <MdLocationOn /> Atlanta Georgia
            </h5>
          </div>
          <div className={css.reward}>
            <div>
              <p>$1,980</p>
              <span>of hiring reward </span>
            </div>
            <div className={css.icon}>
              <IoExtensionPuzzle />
            </div>
          </div>
          <div className={css.extra}>
            <h5>Be the first one to recommand!</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.card}>
          <img src={img} alt="product" />
          <div className={css.desc}>
            <h4>Bussiness Strategy Associate</h4>
            <h5>Dropbox, Inc.</h5>
            <h5>
              <MdLocationOn /> Sanfrancisco, California
            </h5>
          </div>
          <div className={css.reward}>
            <div>
              <p>$3,100</p>
              <span>of hiring reward </span>
            </div>
            <div className={css.icon}>
              <IoExtensionPuzzle />
            </div>
          </div>
          <div className={css.extra}>
            <h5>Be the first one to recommand!</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.card}>
          <img src={img} alt="product" />
          <div className={css.desc}>
            <h4>Financial Analyst</h4>
            <h5>McDonald's Corporation</h5>
            <h5>
              <MdLocationOn /> Comlumbus, Ohio
            </h5>
          </div>
          <div className={css.reward}>
            <div>
              <p>$2,600</p>
              <span>of hiring reward </span>
            </div>
            <div className={css.icon}>
              <IoExtensionPuzzle />
            </div>
          </div>
          <div className={css.extra}>
            <h5>Be the first one to recommand!</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.card}>
          <img src={img} alt="product" />
          <div className={css.desc}>
            <h4>Bussiness Strategy Associate</h4>
            <h5>Dropbox, Inc.</h5>
            <h5>
              <MdLocationOn /> Sanfrancisco, California
            </h5>
          </div>
          <div className={css.reward}>
            <div>
              <p>$3,100</p>
              <span>of hiring reward </span>
            </div>
            <div className={css.icon}>
              <IoExtensionPuzzle />
            </div>
          </div>
          <div className={css.extra}>
            <h5>Be the first one to recommand!</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
