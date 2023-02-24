import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import cardImage from "../../../assets/Images/Adidas_Logo.svg.png";
import { CardList } from "./CardbrandsStyled";
const CardBrands = () => {
  return (
    <CardList className="shadow-sm mb-4 rounded-3">
      <div className="image_card">
        <img src={cardImage} alt="cardImage" />
      </div>
      <div className="text_box">
        <span className="f_ch d-inline-block">Fashion</span>
        <h5 className="fw-bold mb-2">adidas</h5>
        <div className="disc_arrw d-flex justify-content-between align-items-center">
          <p className="m-0 offer_disc">Offers up 20%</p>
          <BiRightArrowAlt color="#0a2c4c" className="shadow-lg" />
        </div>
      </div>
    </CardList>
  );
};

export default CardBrands;
