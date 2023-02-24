import React from "react";
import { TitleDiv } from "./StyledTitle";
const TitleSection = ({ title, subtitle, btnSell }) => {
  return (
    <TitleDiv className="d-flex w-100 justify-content-between align-items-center mb-5 title_sections">
      <div className="title_subTitle">
        <h4 className="fw-normal main_h">{title} </h4>
        <span className="subtitle">{subtitle}</span>
      </div>
      <button className="btn btn_sellAll fw-bolder">{btnSell}</button>
    </TitleDiv>
  );
};

export default TitleSection;
