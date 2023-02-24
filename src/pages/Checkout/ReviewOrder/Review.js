import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CompinedSh from "../../../assets/Images/Combined Shape.png";
import servEXPRESS from "../../../assets/Images/Express.png";
import finalizeIcon from "../../../assets/Images/finalize.png";
import HomeIcon from "../../../assets/Images/Home.png";
import cardPay from "../../../assets/Images/masterCardd.png";
import phoneIcon from "../../../assets/Images/Phone.png";
import prfofileImg from "../../../assets/Images/profile.png";
import DataSummary from "../../../Components/Checkout/DataSummary/DataSummary";
import ProgressBar from "../../../Components/Checkout/ProgressBarCheck/ProgressBar";
import HeaderCheckOut from "./../../../Components/Checkout/headerCheckout/headerCheckOut";
import ListCarts from "./../../../Components/Checkout/ListItemsCart/ListItems/ListCarts";
import ShippService from "./../../../Components/Checkout/shippingService/ShippService";
import OurFeature from "./../../../Components/ReusableComponent/ourFeature/OurFeature";
import { ReviewStyle } from "./ReviewStyle";

const Review = () => {
  return (
    <ReviewStyle>
      <HeaderCheckOut title="Review Order" />
      <ProgressBar />

      <div className="container body_page">
        <div className="row pb-5">
          <div className="col-8 review_details">
            <div className="bg-white mb-3 shadow-sm rounded-3 p-3 pt-4">
              <h4 className="fw-semibold">Shipping to…</h4>
              <p className="sub_title">Please check berofe you finalize your order</p>

              <div className="user_srvShipping mt-5 d-flex justify-content-between align-items-center border-bottom pb-4">
                <div className="user_profile d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex">
                    <div className="image_profile">
                      <img src={prfofileImg} alt="imageProfile shadow-sm" />
                    </div>

                    <div className="info_user px-3">
                      <div className="pb-2 d-flex justify-content-start align-items-center gap-4">
                        <span className="user fw-semibold fs-5">Gareth Barry</span>
                        <span className="d-flex justify-content-center align-items-center gap-2 mob_num">
                          +1 218 128 991 <img src={phoneIcon} alt="phoneIcon" />
                        </span>
                      </div>
                      <p className="d-flex justify-content-center align-items-center gap-2 addrss">
                        <img src={HomeIcon} alt="HomeIcon" />
                        5690 Matilda Green Suite 627, New York, 12345
                      </p>
                    </div>
                  </div>
                  <button className="btn edit_btn d-flex justify-content-center align-items-center gap-2 fw-semibold">
                    <img src={CompinedSh} alt="CompinedSh" /> Edit info
                  </button>
                </div>
              </div>
              <ShippService
                title="Express Expedition"
                subTitle="Estimated delivery time: Jul 20 - Aug 03"
                currency={
                  <p>
                    $35.00 <span className="text-decoration-line-through disc">$45.00</span>
                  </p>
                }
                imageService={servEXPRESS}
                labelFor="Express"
              />
            </div>
            <div className="method_payment bg-white mb-3 shadow-sm rounded-3 p-3 pt-4">
              <div className="h_title d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-semibold">Payment method</h4>
                <button className="btn fw-semibold change_meth">Change method</button>
              </div>
              <div className="info_method d-flex align-items-center justify-content-between rounded-3 p-4">
                <div className="details_card d-flex align-items-center gap-4">
                  <div className="image_cardPay">
                    <img src={cardPay} alt="card" />
                  </div>
                  <div className="text_tit">
                    <p className="fw-semibold fs-5">Credit Card</p>
                    <p className="card_expiry"> **** 7282 - Expired 8/2022</p>
                  </div>
                </div>
                <button className="btn edit_btn d-flex justify-content-center align-items-center gap-2 fw-semibold">
                  <img src={CompinedSh} alt="CompinedSh" /> Edit info
                </button>
              </div>
            </div>

            <div className="bg-white mb-3 shadow-sm rounded-3 p-3 pt-4">
              <h4 className="fw-semibold">Items cart</h4>
              <p className="sub_title">Choose what service you want for your transaction</p>

              <>
                <ListCarts />
              </>
            </div>
          </div>
          <div className="col-4 px-0">
            <div className=" bg-white pt-4 shadow-sm rounded-3 ">
              <h4 className="fs-5 px-3 pb-3">Order Summary</h4>
              <DataSummary />
              <div className="px-3">
                <div className="applied d-flex justify-content-between align-items-center rounded-3">
                  <span className="fw-semibold text-capitalize px-2">ELMA50</span>
                  <span className="apply rounded-3">Applied</span>
                </div>
                <hr className="w-100 line_" />
              </div>
              <form className="note px-3">
                <span className="title fw-bold">Write a note</span>
                <textarea
                  name="w3review"
                  rows="5"
                  cols="50"
                  className="form-control border-0 mt-2"
                  placeholder="Fragile item, Electronics etc"
                ></textarea>
                <hr className="w-100 line_not" />
              </form>
              <p className="d-flex justify-content-between align-items-center pb-3 px-3 fw-bold">
                <span>Order Total</span>
                <span>$1,610.00</span>
              </p>
            </div>
            <div className="L-routes mt-4">
              <Link to="/purchaseSuccess" className="btn w-100 _review mb-2">
                <img src={finalizeIcon} alt="review" className="px-1" /> Finalize Order
              </Link>
              <Link to="/cottage" className="btn w-100 b_info">
                <BsArrowLeft /> Back to Customer Info
              </Link>
            </div>
          </div>
        </div>
        <OurFeature />
      </div>
    </ReviewStyle>
  );
};

export default Review;
