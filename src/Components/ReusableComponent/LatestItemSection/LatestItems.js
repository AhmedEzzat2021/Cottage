import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import smallLatest_1 from "../../../assets/Images/70hvv4od.png";
import bigLaest from "../../../assets/Images/d0ixigwb-big.png";
import smallLatest_2 from "../../../assets/Images/j4raq205.png";

import { LatestStyle } from "./LatestItemsStyled";

const LatestItems = () => {
  return (
    <LatestStyle>
      <div className="container">
        <h3 className="pb-5 title_ fw-normal">LATEST OFFERS</h3>
        <div className="row">
          <div className="big_img col-lg-9 col-sm-12">
            <img src={bigLaest} alt="latest" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="small_img col-lg-3 ">
            <img src={smallLatest_2} alt="latest" />
            <img src={smallLatest_1} alt="latest" />
          </div>
        </div>
      </div>
    </LatestStyle>
  );
};

export default LatestItems;
