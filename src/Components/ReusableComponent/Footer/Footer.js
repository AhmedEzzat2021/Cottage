import React from "react";

import android from "../../../assets/Images/google-play.png";
import ios from "../../../assets/Images/ios-apple.png";
import logoFooter from "../../../assets/Images/Logo.png"; //Screenshot_2.png
import triangleImage from "../../../assets/Images/Path 18.png";
import BottomBar from "./bottomBar/BottomBar";
import { FooterStyle } from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <img src={triangleImage} alt="triangle" className="backGTriangle" />
        <div className="container">
          <div className="row padd__">
            <div className="col-sm-12 col-lg-6 mb-2">
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="logo mb-4">
                  <img src={logoFooter} alt="logo" />
                </div>

                <p className="text_foot mb-4">
                  Take COTTAGE anywhere you go with our exclusive applications for both Android and iOS devices.{" "}
                </p>

                <div className="downloadApps">
                  <h3 className="mb-3">Download our app</h3>
                  <div className="d-flex align-items-center">
                    <a href="/" className="box__app d-flex justify-content-center align-items-center rounded-2">
                      <img src={android} alt="google" />
                      <div className="text_app">
                        <span>GET IT ON</span>
                        <p>Google Play</p>
                      </div>
                    </a>

                    <a href="/" className="box__app mx-3 d-flex justify-content-center align-items-center rounded-2">
                      <img src={ios} alt="google" />
                      <div className="text_app">
                        <span>GET IT ON</span>
                        <p>Google Play</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-2 foot_categories  mb-3">
              <h3 className="fw-medium mb-4 ">Catigories</h3>
              <ul>
                <li>Women clothes</li>
                <li>Men clothes</li>
                <li>Kids</li>
                <li>Electronic</li>
                <li>Furniture</li>
                <li>Toys</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-2 foot_categories  mb-3">
              <h3 className="fw-medium mb-4">My Account</h3>
              <ul>
                <li>Account information</li>
                <li>My listing</li>
                <li>My Favorite</li>
                <li>My payment</li>
                <li>My orders</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-2 foot_categories  mb-3">
              <h3 className="fw-medium mb-4 ">Information</h3>
              <ul>
                <li>About us</li>
                <li>Terms and Condition</li>
                <li>Privacy & Cookie Policy</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
        </div>
        <BottomBar />
      </FooterStyle>
    </>
  );
};

export default Footer;
