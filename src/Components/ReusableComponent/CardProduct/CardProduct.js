import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ImageCard from "../../../assets/Images/shirt.png";
import { CardProdStyle } from "./StyleCardProduct";

const ProdctCrd = ({ addToCard, addToFav, offerPaddge, newPaddge }) => {
  return (
    <Link to="/productDetails">
      <CardProdStyle>
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img
            src={ImageCard}
            className="card-img-top p-5"
            alt="CardProduct"
            style={{ maxWidth: "300px", margin: "0 auto", display: "block" }}
          />
          <div className="text_price pt-3 d-flex justify-content-between">
            <div>
              <p className="price fw-semibold">$99.50</p>
              <span className="descrp">Gaming Headset 32db Black built in mic</span>
            </div>
            {addToFav && (
              <span className="iconFav">
                <AiOutlineHeart />
              </span>
            )}
          </div>
          {addToCard && (
            <div className="foot_card d-flex justify-content-start align-items-center gap-2 mb-2">
              <button className="btn">Add to Cart</button>
            </div>
          )}
          {newPaddge && <span className="padg_new">New</span>}
          {offerPaddge && <span className="offer_">Offer</span>}
        </div>
      </CardProdStyle>
    </Link>
  );
};

export default ProdctCrd;
