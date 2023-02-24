import React from "react";
import { ItemStyle } from "./StyleItem";
// import watchImg from '../../../../assets/Images/watch.png'
// import handImg from '../../../../assets/Images/handset.png'
import lapImg from "../../../../assets/Images/laptop.png";
// import shirtImg from '../../../../assets/Images/shirtz.png'
import CompinedSh from "../../../../assets/Images/Combined Shape.png";

const ItemCart = () => {
  return (
    <ItemStyle className="d-flex justify-content-between align-items-center mb-5">
      <div className="img_title d-flex align-items-center gap-3">
        <div className="img_cart">
          <img src={lapImg} alt="itemCart" />
        </div>
        <div className="text_cart">
          <p className="fw-bold brand"> Macbook Pro 2018</p>
          <span className="color_brand"> Apple, Space Grey</span>
        </div>
      </div>

      <div className="count_p_price fw-normal">
        <span>2</span> x <span>$1,725.00</span>
      </div>

      <span className="total_amount fw-bold">$3,500.00</span>

      <button className="ico_edit btn d-flex justify-content-center align-items-center">
        <img src={CompinedSh} alt="edit" style={{ height: "13px" }} />
      </button>
    </ItemStyle>
  );
};

export default ItemCart;
