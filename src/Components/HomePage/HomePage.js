import "animate.css";
import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import cam from "../../assets/Images/cam.png";
import ListIm from "../../assets/Images/list.png";
import paidArt from "../../assets/Images/paid-articles.png";
import triangleImage from "../../assets/Images/Path 18.png";
import waveBackg from "../../assets/Images/wave-1.png";
import imageWave from "../../assets/Images/wave-down.png";
import FlashSale from "../FlashSale/FlashSale";
import Categories from "../ReusableComponent/Categories/Categories";
import LatestItems from "../ReusableComponent/LatestItemSection/LatestItems";
import OurFeature from "../ReusableComponent/ourFeature/OurFeature";
import TitleSection from "../ReusableComponent/title&subtitle&btnSeeAll/TitleSection";
import { CategoryStyle, FlashSleSection, Header, LatestView } from "./styledHome/HomePageStyled";

function HomePage({ toggleSidebar, sidebar }) {
  return (
    <>
      <Header>
        <div className="backTriangle ">
          <img src={triangleImage} alt="headerTriangle" />
        </div>
        <div className="cont_head">
          <div className="text text-center">
            <h4 className="mb-4">Shop everything in one place</h4>
            <h2>#1 online Mall at Saudi Arabia</h2>
          </div>
        </div>
      </Header>

      <CategoryStyle>
        <div className="container">
          <TitleSection
            title={
              <>
                <span className="cust_text">View </span>All Categories
              </>
            }
            subtitle="Our latest updates."
            btnSell={
              <span>
                See All <MdOutlineKeyboardArrowRight className="icoArrow" size="1.5rem" />
              </span>
            }
          />
          <Categories />
        </div>
      </CategoryStyle>

      <FlashSleSection className="Latest_join bg-white pt-5 pb-1 position-relative ">
        <img src={waveBackg} alt="wave" className="wave-up" />

        {/*How to join*/}
        <div className="container mb-5">
          <TitleSection
            title={
              <>
                <span className="cust_text">How to join </span> COTTAGE
              </>
            }
            subtitle="Did you know ?"
          />
          <div className="row">
            <div className="col-sm-12 col-lg-4 mb-2">
              <div className="cont_box  no1">
                <img src={cam} alt="camera" />
                <p>A clear photo/video gets you more exposure</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 mb-2">
              <div className="cont_box  orag">
                <img src={ListIm} alt="camera" />
                <p>More details means more users will find your listing easier.</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 mb-2">
              <div className="cont_box  blu">
                <img src={paidArt} alt="camera" />
                <p>Your listing easier. Choose one of our cool add-ons for millions to see it!</p>
              </div>
            </div>
          </div>
        </div>

        {/*FlashSALE - SECTION*/}
        <FlashSale />
      </FlashSleSection>

      <div className="wave_d w-100">
        <img src={imageWave} alt="wave" className="wave-down w-100" />
      </div>
      <LatestView>
        <LatestItems />
        <OurFeature />
      </LatestView>
    </>
  );
}

export default HomePage;
//
