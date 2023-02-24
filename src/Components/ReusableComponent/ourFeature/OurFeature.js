import React from "react";
import { FeatStyle } from "./OurFeatStyle";

import imgThird from "../../../assets/Images/car_our.png";
import imgTwo from "../../../assets/Images/check_our.png";
import imgOne from "../../../assets/Images/ok_our.png";
import imgForth from "../../../assets/Images/star_our.png";

const OurFeature = () => {
  return (
    <FeatStyle>
      <div className="our_feature py-5">
        <div className="container bg-white shadow-sm p-3 rounded-2">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-sm-2">
              <div className="cont_box">
                <img src={imgTwo} alt="ourFeature" />
                <div className="d-flex justify-content-start align-items-start flex-column txt_our">
                  <p className="title">Reasonable Prices</p>
                  <p className="subTitle">Have you ever finally just </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-sm-2">
              <div className="cont_box">
                <img src={imgForth} alt="ourFeature" />
                <div className="d-flex justify-content-start align-items-start flex-column txt_our">
                  <p className="title">Customer Support</p>
                  <p className="subTitle">Have you ever finally just </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-sm-2">
              <div className="cont_box">
                <img src={imgOne} alt="ourFeature" />
                <div className="d-flex justify-content-start align-items-start flex-column txt_our">
                  <p className="title">Express Delivery</p>
                  <p className="subTitle">Have you ever finally just </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-sm-2">
              <div className="cont_box">
                <img src={imgThird} alt="ourFeature" />
                <div className="d-flex justify-content-start align-items-start flex-column txt_our">
                  <p className="title">Express Delivery</p>
                  <p className="subTitle">Have you ever finally just </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatStyle>
  );
};

export default OurFeature;
