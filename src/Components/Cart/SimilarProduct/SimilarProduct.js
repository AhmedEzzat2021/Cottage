import React from "react";
import imgBag from "../../../assets/Images/bag.png";
import imgShirt from "../../../assets/Images/shirt.png";
import imgShirtss from "../../../assets/Images/shirtz.png";
import imgShorts from "../../../assets/Images/shorts.png";
import { Similar } from "./StyleSiimilar";
const SimilarProduct = () => {
  return (
    <Similar>
      <h4 className="title pb-3">Similar products</h4>
      <ul className="list_products">
        <li className="d-flex justify-content-start align-items-center gap-3 mb-4">
          <div className="image_prod border border-1 p-3 rounded-3">
            <img src={imgShorts} alt="productShorts" />
          </div>
          <div className="txt_product">
            <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
            <p className="price">$339.90</p>
          </div>
        </li>
        <li className="d-flex justify-content-start align-items-start gap-3 mb-4">
          <div className="image_prod border border-1 p-3 rounded-3">
            <img src={imgBag} alt="productShorts" />
          </div>
          <div className="txt_product">
            <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
            <p className="price">$339.90</p>
          </div>
        </li>
        <li className="d-flex justify-content-start align-items-start gap-3 mb-4">
          <div className="image_prod border border-1 p-3 rounded-3">
            <img src={imgShirt} alt="productShorts" />
          </div>
          <div className="txt_product">
            <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
            <p className="price">$339.90</p>
          </div>
        </li>
        <li className="d-flex justify-content-start align-items-start gap-3 mb-4">
          <div className="image_prod border border-1 p-3 rounded-3">
            <img src={imgShirtss} alt="productShorts" />
          </div>
          <div className="txt_product">
            <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
            <p className="price">$339.90</p>
          </div>
        </li>
        <li className="d-flex justify-content-start align-items-start gap-3 mb-4">
          <div className="image_prod border border-1 p-3 rounded-3">
            <img src={imgShorts} alt="productShorts" />
          </div>
          <div className="txt_product">
            <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
            <p className="price">$339.90</p>
          </div>
        </li>
      </ul>
    </Similar>
  );
};

export default SimilarProduct;
