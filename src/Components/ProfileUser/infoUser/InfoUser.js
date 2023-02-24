import React from "react";
import prfofileImg from "../../../assets/Images/infoImage.png";
import { StyleInfo } from "./StyleInfo";

const InfoUser = ({ children }) => {
  return (
    <StyleInfo className="d-flex justify-content-start align-items-center gap-3">
      <div className="image_profile">
        <img src={prfofileImg} alt="imageProfile shadow-sm" />
      </div>
      <div className="txt_info">{children}</div>
    </StyleInfo>
  );
};

export default InfoUser;
