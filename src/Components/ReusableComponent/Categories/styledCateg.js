import styled from "styled-components";
import arrowLeft from "../../../assets/Images/arrow-left-solid.svg";
import arrowRight from "../../../assets/Images/arrow-right-solid.svg";

export const Category = styled.div`
  .swiper-button-next {
    background-image: url(${arrowRight});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 0px rgba(128, 128, 128, 0.3);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(128, 128, 128, 0.3);
    -moz-box-shadow: 0px 0px 4px 0px rgba(128, 128, 128, 0.3);
    width: 2rem;
    height: 2rem;
    top: 40px;
  }
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-image: url(${arrowLeft});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 0px rgba(128, 128, 128, 0.3);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(128, 128, 128, 0.3);
    -moz-box-shadow: 0px 0px 4px 0px rgba(128, 128, 128, 0.3);
    width: 2rem;
    height: 2rem;
    top: 40px;
  }
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-slide {
    height: 65px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #4a3e4c;
    font-size: 21px;
    padding: 10px;
    width: fit-content !important;
  }

  .img_categ {
    background-color: #4a3e4c;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 10px;
    img {
      width: 25px;
    }
  }
  /* .title_category{
    font-size: 21px;
  } */
`;
