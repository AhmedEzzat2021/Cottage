import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import ActiveImg from "../../../assets/Images/bigImage.png";
import imgGallery1 from "../../../assets/Images/image 17.png";
import imgGallery2 from "../../../assets/Images/image 18.png";
import imgGallery3 from "../../../assets/Images/image 19.png";
import imgGallery4 from "../../../assets/Images/image 20.png";
import "./style.css";
const GalleryProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 active_photos"
      >
        {/*Photos acive slider*/}

        <SwiperSlide>
          <h3>Image active</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ActiveImg} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ActiveImg} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ActiveImg} alt="gallery" />
        </SwiperSlide>
      </Swiper>

      {/*Photos gallery small*/}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper gallery_photos"
      >
        <SwiperSlide>
          <img src={imgGallery1} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgGallery2} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgGallery3} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgGallery4} alt="gallery" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default GalleryProduct;
