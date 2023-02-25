import React from "react";
import { BsTrashFill } from "react-icons/bs";
import prodImg from "../../../assets/Images/Bitmap.png";
import { CardStyle } from "./StyleCard";

const CardSummary = () => {
  return (
    <>
      <CardStyle className="d-flex justify-content-between align-items-center">
        <div className="img_card">
          <img src={prodImg} alt="imageCard" className="" />
        </div>
        <div className="details_card d-flex flex-column justify-content-center align-items-start gap-2">
          <span className="title_prod fw-medium fs-6">Beats by Dre C 3450</span>
          <p className="price_count">
            <span className="price">$1,725.00</span>
            <span className="count_prod">1 item</span>
          </p>
        </div>
        <span className="ico_delete">
          <BsTrashFill />
        </span>
      </CardStyle>
    </>
  );
};

export default CardSummary;
