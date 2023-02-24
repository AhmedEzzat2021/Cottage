import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CopyRightSTY } from "../FooterStyled";
const BottomBar = () => {
  return (
    <>
      <CopyRightSTY className="p-2">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="copyRight fw-bold">&#169; All Rights Reserved By Masa Mall 2023</p>

          <ul className="d-flex justify-content-between align-items-center">
            <li className="SocialMasa faceB">
              <FaFacebookF />
            </li>
            <li className="SocialMasa twitt">
              <FaTwitter />
            </li>
            <li className="SocialMasa linked">
              <FaLinkedin />
            </li>
            <li className="SocialMasa instag">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </CopyRightSTY>
    </>
  );
};

export default BottomBar;
