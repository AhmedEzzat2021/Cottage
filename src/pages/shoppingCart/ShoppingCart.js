import React from "react";
import { Link } from "react-router-dom";
import ProductCart from "./../../Components/Cart/productCart/ProductCart";
import RecomendItems from "./../../Components/RecommendedItems/RecomendItems";
import { StyleShCart } from "./StyleShopCart";

const ShoppingCart = () => {
  return (
    <>
      <StyleShCart>
        <div className="head_page mb-4">
          <div className="container">
            <h4>Shopping cart</h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9 list_prods">
              <div className="bg-white mb-5 rounded-3 p-4 def_shadow">
                <ul className="list_products">
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                </ul>

                <div className="free_deliv">
                  <h5>Free Delivery within 1-2 weeks</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
            </div>

            {/* side content */}
            <div className="col-3 px-0">
              <div className=" bg-white p-3 def_shadow rounded-3 mb-3 ">
                <div className="coupon">
                  <label className="pb-1">Have a coupon?</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type coupon"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button className="btn" type="button" id="button-addon2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <ul className=" bg-white p-3 def_shadow rounded-3 side_info_price">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <span>Total price:</span>
                  <span>$1403.97</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <span>Discount:</span>
                  <span className="val_discount">- $60.00</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-3">
                  <span>Tax</span>
                  <span className="val_tax">+ $14.00</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <span>Total:</span>
                  <span className="fw-medium">$1357.97</span>
                </li>
                <Link to="/shipping&payment" className="checkOut-btn w-100 mt-2">
                  <button className="btn w-100 fw-medium">Checkout</button>
                </Link>
                <li className="route_to_shpop w-100 mt-2">
                  <button className="btn w-100 border fw-medium">Back to shop</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg_section py-5 ">
          <div className="container">
            <RecomendItems />
          </div>
        </div>
      </StyleShCart>
    </>
  );
};

export default ShoppingCart;
