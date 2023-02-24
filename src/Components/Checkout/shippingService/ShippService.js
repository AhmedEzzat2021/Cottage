import React from "react";
import { ServiceStyle } from "./shipServiceStyle";
const ShippService = ({ title, subTitle, currency, imageService, id, labelFor }) => {
  return (
    <>
      <ServiceStyle>
        <label className="d-flex justify-content-between align-items-center w-100 item_" htmlFor={labelFor}>
          <div className="d-flex align-items-start gap-4">
            <div className="title_serv">
              <p className="text_ fw-bold">{title}</p>
              <span className="sub_">{subTitle}</span>
            </div>
          </div>
          <div className="Currency d-flex justify-content-start align-items-center fw-bold ">
            <div className="ico_currn">
              <span>$</span>
            </div>
            {currency}
          </div>
          <img src={imageService} alt="serviceShipping" />
        </label>
      </ServiceStyle>
    </>
  );
};

export default ShippService;
