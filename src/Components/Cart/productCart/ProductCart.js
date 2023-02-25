import React from "react";
import { FiHeart } from "react-icons/fi";
import imgCart from "../../../assets/Images/shirt.png";
import { StyleProd } from "./StyleProdCart";
const ProductCart = () => {
  return (
    <StyleProd className="d-flex justify-content-between align-items-start flex-wrap border-bottom pb-4 mb-4">
      <div className="d-flex justify-content-start align-items-start gap-3 mb-3 inf_prod">
        <div className="image_prod border border-1 p-3 rounded-3 ">
          <img src={imgCart} alt="product" />
        </div>
        <div className="txt_product d-flex flex-column">
          <p className="title_ pb-2">Blazer Suit Dress Jacket for Men</p>
          <p className="info">Size: Medium, Color: Blue</p>
        </div>
      </div>
      <div className="qty d-flex justify-content-center align-items-center gap-3 mb-3">
        <select className="form-control form-select shadow-sm">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div className="info_price">
          <p className="total">$99.50</p>
          <p className="per_item">20$ / per item</p>
        </div>
      </div>
      <div className="fav_delet d-flex gap-2 mb-3">
        <span className="btn shadow-sm btn_fav">
          <FiHeart />
        </span>
        <buton className="btn remove_ shadow-sm">Remove</buton>
      </div>
    </StyleProd>
  );
};

export default ProductCart;
