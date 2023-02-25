import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import servDHL from "../../../assets/Images/DHL.png";
import servEXPRESS from "../../../assets/Images/Express.png";
import servFEDEX from "../../../assets/Images/FedEx.png";
import iconRevieww from "../../../assets/Images/iconspace_Create Note_25px.png";
import servJNE from "../../../assets/Images/JNE.png";
import LogoCottage from "../../../assets/Images/Logo.png";
import MasterCard from "../../../assets/Images/Master Card.png";
import payPal from "../../../assets/Images/Paypal.png";
import servPOS from "../../../assets/Images/POS.png";
import VisaImg from "../../../assets/Images/Visa.png";
import HeaderCheckOut from "../../../Components/Checkout/headerCheckout/headerCheckOut";
import ListCardsSummary from "../../../Components/Checkout/ListCardsSummary/ListCardsSummary";
import OurFeature from "../../../Components/ReusableComponent/ourFeature/OurFeature";
import DataSummary from "./../../../Components/Checkout/DataSummary/DataSummary";
import ProgressBar from "./../../../Components/Checkout/ProgressBarCheck/ProgressBar";
import ShippService from "./../../../Components/Checkout/shippingService/ShippService";
import { PayForm, ShipingPaymentStyle } from "./StyledShiping";
const ShipingPayment = () => {
  return (
    <ShipingPaymentStyle>
      <HeaderCheckOut title="Shipping & Payment" />
      <ProgressBar />

      <div className="container body_page">
        <div className="row pb-5">
          <div className="col-sm-12 col-lg-8 shipping_serv">
            <div className="bg-white mb-5 def_shadow rounded-3 p-3 pt-4">
              <h4 className="fw-semibold title_sid">Choose Shipping Service</h4>
              <p className="sub_title">You can choose one best shipping service accross your needs.</p>

              <form className="list_service pt-3">
                <div className="px-4 py-4 rounded-3 serv_options">
                  <input type="radio" name="Shipping_Service" id="COTTAGE" />
                  <ShippService
                    title="COTTAGE"
                    subTitle="Estimated delivery time: Jul 20 - Aug 03"
                    currency={
                      <p>
                        $35.00 <span className="text-decoration-line-through disc">$45.00</span>
                      </p>
                    }
                    imageService={LogoCottage}
                    labelFor="COTTAGE"
                  />
                </div>

                <div className="px-4 py-4 rounded-3 serv_options">
                  <input type="radio" name="Shipping_Service" id="DHL" />
                  <ShippService
                    title="DHL Express"
                    subTitle="Estimated delivery time: Jul 20 - Aug 03"
                    currency="Free Shipping"
                    imageService={servDHL}
                    labelFor="DHL"
                  />
                </div>
                <div className="px-4 py-4 rounded-3 serv_options">
                  <input type="radio" name="Shipping_Service" id="FEDEX" />
                  <ShippService
                    title="FedEx"
                    subTitle="Estimated delivery time: Jul 20 - Aug 03"
                    currency={
                      <p>
                        $35.00 <span className="text-decoration-line-through disc">$45.00</span>
                      </p>
                    }
                    imageService={servFEDEX}
                    labelFor="FEDEX"
                  />
                </div>
                <div className="px-4 py-4 rounded-3 serv_options">
                  <input type="radio" name="Shipping_Service" id="Express" />
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
                <div className="px-4 py-4 rounded-3 serv_options">
                  <input type="radio" name="Shipping_Service" id="JNE" />

                  <ShippService
                    title="JNE Express"
                    subTitle="Estimated delivery time: Jul 20 - Aug 03"
                    currency={
                      <p>
                        $35.00 <span className="text-decoration-line-through disc">$45.00</span>
                      </p>
                    }
                    imageService={servJNE}
                    labelFor="JNE"
                  />
                </div>
                <div className="px-4 py-4 rounded-3 serv_options">
                  <input type="radio" name="Shipping_Service" id="POS" />

                  <ShippService
                    title="POS Indonesia"
                    subTitle="Estimated delivery time: Jul 20 - Aug 03"
                    currency={
                      <p>
                        $35.00 <span className="text-decoration-line-through disc">$45.00</span>
                      </p>
                    }
                    imageService={servPOS}
                    labelFor="POS"
                  />
                </div>
              </form>
            </div>
            <div className="bg-white def_shadow rounded-3 p-3 pt-4">
              <h4 className="fw-semibold title_sid">Payment with..</h4>
              <p className="sub_title mb-4">Choose what service you want for your transaction</p>

              <div className="row mt-2">
                <label className="col-sm-12 col-lg-6 mb-3">
                  <div className="def_shadow p-3 rounded-3 cont__">
                    <input type="radio" name="payment_service" className="mb-3" />
                    <div>
                      <span className="fw-medium">Credit Card</span>
                      <span className="px-3">
                        <img src={MasterCard} alt="masterCard" />
                        <img src={VisaImg} alt="visa" />
                      </span>
                    </div>
                    <span className="text_credit">
                      You can use all credit card service.
                      <br /> We can accept Visa and Master Card.
                    </span>
                  </div>
                </label>
                <label className="col-sm-12 col-lg-6 mb-3">
                  <div className="def_shadow p-3 rounded-3 cont__">
                    <input type="radio" name="payment_service" className="mb-3" />
                    <div className="">
                      <span className="fw-medium">Credit Card</span>
                      <span className="px-3">
                        <img src={payPal} alt="paypal" />
                      </span>
                    </div>
                    <span className="text_credit">
                      You can use all credit card service. We can accept Visa and Master Card.
                    </span>
                  </div>
                </label>
              </div>
              <hr className="w-100 my-4" />

              <form>
                <PayForm className="row">
                  <div className="col cont_input">
                    <label htmlFor="cardName" className="form-label">
                      Card name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. Alex Iwobi"
                      aria-label="Card name"
                      id="cardName"
                    />
                  </div>
                  <div className="col cont_input mb-5">
                    <label htmlFor="CardNumber" className="form-label">
                      Credit Card Number:
                    </label>
                    <input
                      className="form-control"
                      id="CardNumber"
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9\s]{13,19}"
                      autoComplete="cc-number"
                      maxLength="19"
                      placeholder="xxxx xxxx xxxx xxxx"
                    />
                  </div>
                  <div className="row mb-5">
                    <div className="col">
                      <div class="dropdown month">
                        <p className="pb-2">Month</p>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select month
                          <BiChevronDown className="s" />
                        </button>
                        <ul className="dropdown-menu">
                          <li>Action</li>
                          <li>Another action</li>
                          <li>Something else here</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown month year">
                        <p className="pb-2">Years</p>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select years
                          <BiChevronDown className="s" />
                        </button>
                        <ul className="dropdown-menu">
                          <li>Action</li>
                          <li>Another action</li>
                          <li>Something else here</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <label className="pb-2">CVV</label>
                      <input type="number" placeholder="000" className="form-control" />
                    </div>
                  </div>
                  <div className="col-4">
                    <button className="btn btn_submit w-100 py-2">Submit Card Info</button>
                  </div>
                </PayForm>
              </form>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className=" bg-white pt-4 def_shadow rounded-3  side_summary ">
              <h4 className="px-3 title_side">Order Summary</h4>
              <ListCardsSummary />
              <hr className="w-100" />
              <DataSummary />
            </div>
            <div className="L-routes mt-4">
              <Link to="/review" className="btn w-100 _review mb-2">
                <img src={iconRevieww} alt="review" /> Review your Order
              </Link>
              <Link to="/cottage" className="btn w-100 b_info">
                <BsArrowLeft /> Back to Customer Info
              </Link>
            </div>
          </div>
        </div>
        <OurFeature />
      </div>
    </ShipingPaymentStyle>
  );
};

export default ShipingPayment;
