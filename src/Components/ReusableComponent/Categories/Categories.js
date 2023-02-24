import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Tshirt from "../../../assets/Images/casual-t-shirt-.png";
import CardBrands from "../Cardbrands/CardBrands";
import { Category } from "./styledCateg";
const Categories = () => {
  return (
    <Category>
      <>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-5"
          slidesPerView={8}
          spaceBetween={10}
        >
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_categ d-flex justify-content-center align-items-center">
              <img src={Tshirt} alt="tshirt" />
            </div>
            <span className="title_category">Men Clothes</span>
          </SwiperSlide>
        </Swiper>
      </>

      <div className="list">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardBrands />
          </div>
        </div>
      </div>
    </Category>
  );
};

export default Categories;
