import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import truckIMG from "../../../assets/Images/Shipping.png";
import OurFeature from "./../../../Components/ReusableComponent/ourFeature/OurFeature";
import { StylePursh } from "./PurchaseStyle";
const Purchase = () => {
  return (
    <StylePursh className="d-flex justify-content-center align-items-center text-center flex-column">
      <div className="container">
        <div className="b_light_icon mb-5 d-flex justify-content-center align-items-center rounded-circle">
          <div className="cont_icon rounded-circle">
            <BsCheck2 />
          </div>
        </div>
        <div className="content_pursh">
          <h2 className="fw-bold mb-4">Purchase Success!</h2>
          <p className="w-75 text-center mx-auto txt_pursh">
            <span>Thank's for your order at Elma e-commerce. Your order will be processed as soon as possible.</span>
            <br />
            <span>
              Make sure you make note of your order number, which is
              <span className="fw-bold num_order">1234ABCD56EF</span>.
            </span>
            <br />
            <span>You will be receiving an email shortly with invoice from your order.</span>
          </p>
          <div className="routes_pursh d-flex justify-content-center align-items-center mt-4 flex-wrap-reverse">
            <div className="b_t_shop">
              <IoIosArrowBack />
              <Link to="/cottage" className="px-1">
                Back to shopping
              </Link>
            </div>

            <div className="track_order btn">
              <img src={truckIMG} alt="shipping" />
              <Link to="/TrackOrder">Track your order</Link>
            </div>
          </div>
        </div>
        <OurFeature />
      </div>
    </StylePursh>
  );
};

export default Purchase;
