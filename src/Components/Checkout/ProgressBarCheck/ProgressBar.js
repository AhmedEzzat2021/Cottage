import React from "react";
import { BsArrowRight, BsCheckSquareFill } from "react-icons/bs";
import { StyleProg } from "./StyleProgress";

const ProgressBar = () => {
  return (
    <StyleProg>
      <div className="container">
        <div className="d-flex justify-content-start align-items-center px-2 py-3 cont_step flex-wrap ">
          <div className="step cart_prog active_step">
            <BsCheckSquareFill className="checkRight" />
            <span>Cart</span>
          </div>
          <BsArrowRight className="arrow_step" />
          <div className="step Customer_prog active_step">
            <BsCheckSquareFill className="checkRight" />
            <span>Customer Information</span>
          </div>
          <BsArrowRight className="arrow_step" />
          <div className="step shiping_prog">
            <div className="notActive_step">
              <span>3</span>
            </div>

            <p>Shipping & Payment</p>
          </div>
          <BsArrowRight className="arrow_step" />
          <div className="step review_prog next_step">
            <div className="notActive_step">
              <span>4</span>
            </div>
            <p>Review</p>
          </div>
        </div>
      </div>
    </StyleProg>
  );
};

export default ProgressBar;
