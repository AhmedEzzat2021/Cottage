import React from "react";
import { Link } from "react-router-dom";
import imgProd from "../../assets/Images/bigImage.png";
import Breadcrmb from "../../Components/breadCrumb/Breadcrumb";
import DataSummary from "../../Components/Checkout/DataSummary/DataSummary";
import CardProductMini from "./../../Components/cardGuestCheckout/CardProductGuest";
import AnAccount from "./../../Components/HaveAnAccount/AnAccount";
import { GuestStyle } from "./StyleGuest";
const Guest = () => {
  return (
    <>
      <Breadcrmb>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Clothings</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Order info</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Payment
          </li>
        </ol>
      </Breadcrmb>
      <GuestStyle>
        <div className="container">
          <div className="row">
            <div className="col-9 mb-3 ">
              <AnAccount />

              <div className="check_content bg-white def_shadow mt-3 rounded p-3">
                <form>
                  <h4 className="fw-normal mb-3">Guest checkout</h4>
                  <div className="row up_form">
                    <div className="col-6 mb-3">
                      <label>First name</label>
                      <input type="text" className="form-control" placeholder="Type here" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Last name</label>
                      <input type="text" className="form-control" placeholder="Type here" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Phone</label>
                      <input type="number" className="form-control" placeholder="+1234567890" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="example@website.com" />
                    </div>
                    <div className="check d-flex justify-content-start align-items-center">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        Keep me up to date on news
                      </label>
                    </div>
                  </div>
                  <hr className="w-100 mt-4" />
                </form>

                <form>
                  <div className="row mb-3">
                    <h4 className="fw-normal mb-3">Shipping info</h4>
                    <label className="col inp_choose">
                      <div className="def_shadow p-3 rounded-3 cont__ d-flex justify-content-start align-items-start gap-2">
                        <input type="radio" name="payment_service" className="mb-3" />
                        <p className="text_credit d-flex flex-column align-items-start">
                          <span className="title">Express delivery</span>
                          <span className="sub_title">3-4 days via Fedex </span>
                        </p>
                      </div>
                    </label>
                    <label className="col inp_choose">
                      <div className="def_shadow p-3 rounded-3 cont__ d-flex justify-content-start align-items-start gap-2">
                        <input type="radio" name="payment_service" className="mb-3" />
                        <p className="text_credit d-flex flex-column align-items-start">
                          <span className="title">Post office</span>
                          <span className="sub_title">20-30 days via post</span>
                        </p>
                      </div>
                    </label>
                    <label className="col inp_choose">
                      <div className="def_shadow p-3 rounded-3 cont__ d-flex justify-content-start align-items-start gap-2">
                        <input type="radio" name="payment_service" className="mb-3" />
                        <p className="text_credit d-flex flex-column align-items-start">
                          <span className="title">Self pick-up</span>
                          <span className="sub_title">Come to our shop</span>
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="info__guest row">
                    <div className="col-8 mb-3">
                      <label>Address*</label>
                      <input type="text" className="form-control" placeholder="Type here" />
                    </div>
                    <div className="col-4 mb-3">
                      <label htmlFor="inputZip">Post / ZIP code</label>
                      <input type="text" className="form-control" id="inputZip" placeholder="Type here" />
                    </div>

                    <div className="col-4 mb-3">
                      <label htmlFor="inputCity">Area</label>
                      <input type="text" className="form-control" id="Area" placeholder="Districs, Block" />
                    </div>
                    <div className="col-4 mb-3">
                      <label htmlFor="inputZip">City</label>
                      <input type="text" className="form-control" id="City" placeholder="City, Area" />
                    </div>
                    <div className="col-4 mb-3">
                      <label htmlFor="inputState">State</label>
                      <select id="inputState" className="form-select">
                        <option value="Select">Select</option>
                        <option>...</option>
                      </select>
                    </div>

                    <div className="col-6 mb-3">
                      <label>Note to seller</label>
                      <textarea className="form-control" placeholder="Type if anything"></textarea>
                    </div>

                    <div className="check d-flex justify-content-start align-items-center mb-4">
                      <input className="form-check-input" type="checkbox" value="" id="saveAdress" />
                      <label className="form-check-label" htmlFor="saveAdress">
                        Save this address
                      </label>
                    </div>

                    <div className="rout_form">
                      <button className="btn next_step px-4">Continue</button>
                      <Link to="/" className="b_home border btn mx-2 px-4">
                        Return to shop
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-3 fw-normal">Summary</h4>
              <DataSummary>
                <p className="d-flex justify-content-between align-items-center mb-2">
                  <span className="title">Totla price</span>
                  <span>$1403.97</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-2">
                  <span className="title">Discount:</span>
                  <span className="discount">-$125.00</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-2 pb-3 border-bottom">
                  <span className="title">Shipping cost</span>
                  <span>+ $14.00</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-3">
                  <span className="total">Total:</span>
                  <span className="fs-5">$1357.97</span>
                </p>
              </DataSummary>

              <form className="d-flex justify-content-between align-items-center gap-2 discount_input">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="form-control"
                  style={{ backgroundColor: "#FAFAFA" }}
                />
                <button className="btn apply_code border px-3 bg-white" style={{ color: "#4a3e4c" }}>
                  Apply
                </button>
              </form>

              <div className="list_products">
                <h4 className="fw-normal mb-4 mt-3">Items in cart</h4>
                <CardProductMini>
                  <div
                    className="img_product bg-white border p-2 rounded position-relative"
                    style={{ maxWidth: "70px", height: "70px" }}
                  >
                    <img src={imgProd} alt="product" className="w-100 h-100" />
                    <span className="count_product">5</span>
                  </div>
                  <div className="txt_product d-flex flex-column gap-2">
                    <span className="title_product">Apple iphone 12 pro, 64GB </span>
                    <span className="price" style={{ color: "#9DA1A7", fontSize: "13px" }}>
                      Total: $12.99{" "}
                    </span>
                  </div>
                </CardProductMini>
                <CardProductMini>
                  <div
                    className="img_product bg-white border p-2 rounded position-relative"
                    style={{ maxWidth: "70px", height: "70px" }}
                  >
                    <img src={imgProd} alt="product" className="w-100 h-100" />
                    <span className="count_product">5</span>
                  </div>
                  <div className="txt_product d-flex flex-column gap-2">
                    <span className="title_product">Apple iphone 12 pro, 64GB </span>
                    <span className="price" style={{ color: "#9DA1A7", fontSize: "13px" }}>
                      Total: $12.99{" "}
                    </span>
                  </div>
                </CardProductMini>
                <CardProductMini>
                  <div
                    className="img_product bg-white border p-2 rounded position-relative"
                    style={{ maxWidth: "70px", height: "70px" }}
                  >
                    <img src={imgProd} alt="product" className="w-100 h-100" />
                    <span className="count_product">5</span>
                  </div>
                  <div className="txt_product d-flex flex-column gap-2">
                    <span className="title_product">Apple iphone 12 pro, 64GB </span>
                    <span className="price" style={{ color: "#9DA1A7", fontSize: "13px" }}>
                      Total: $12.99{" "}
                    </span>
                  </div>
                </CardProductMini>
                <CardProductMini>
                  <div
                    className="img_product bg-white border p-2 rounded position-relative"
                    style={{ maxWidth: "70px", height: "70px" }}
                  >
                    <img src={imgProd} alt="product" className="w-100 h-100" />
                    <span className="count_product">5</span>
                  </div>
                  <div className="txt_product d-flex flex-column gap-2">
                    <span className="title_product">Apple iphone 12 pro, 64GB </span>
                    <span className="price" style={{ color: "#9DA1A7", fontSize: "13px" }}>
                      Total: $12.99{" "}
                    </span>
                  </div>
                </CardProductMini>
                <CardProductMini>
                  <div
                    className="img_product bg-white border p-2 rounded position-relative"
                    style={{ maxWidth: "70px", height: "70px" }}
                  >
                    <img src={imgProd} alt="product" className="w-100 h-100" />
                    <span className="count_product">5</span>
                  </div>
                  <div className="txt_product d-flex flex-column gap-2">
                    <span className="title_product">Apple iphone 12 pro, 64GB </span>
                    <span className="price" style={{ color: "#9DA1A7", fontSize: "13px" }}>
                      Total: $12.99{" "}
                    </span>
                  </div>
                </CardProductMini>
              </div>
            </div>
          </div>
        </div>
      </GuestStyle>
    </>
  );
};

export default Guest;
