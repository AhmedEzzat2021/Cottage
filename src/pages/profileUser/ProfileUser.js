import React from "react";

import { Link } from "react-router-dom";
import imgShorts from "../../assets/Images/shorts.png";
import InfoUser from "./../../Components/ProfileUser/infoUser/InfoUser";
import ListAdress from "./../../Components/ProfileUser/ListAddressUser/ListAdress";
import OrderCard from "./../../Components/ProfileUser/Order/OrderCard";
import { Profile } from "./styleUser";

const ProfileUser = () => {
  return (
    <>
      <Profile>
        <>
          <div className="bg-white rounded def_shadow">
            <div className="p-4">
              <InfoUser>
                <div className="txt_user">
                  <p className="fw-medium">Mr. Jackson Mike</p>
                  <p className="email">
                    Email: myusername@gmail.com <span className="num_phone mx-5">Phone: +1234567890988</span>
                  </p>
                </div>
              </InfoUser>
              <ListAdress />
            </div>
            <hr className="w-100" style={{ color: "#9da1a7" }} />
            <div className="px-4 pt-4 pb-2 mb-3">
              <h4 className="fs-5 pb-3">Current orders</h4>
              <OrderCard>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="id_date">
                    <p className="id_order">
                      Order ID: <span>234</span>
                      <span className="date_order mx-4">Feb 23, Mon, 2021</span>
                    </p>
                    <span className="state_order fw-medium">Confirmed</span>
                  </div>
                  <div className="action_order">
                    <button className="btn cancel_ord mx-2">Cancel order</button>
                    <Link to="/TrackOrder" className="btn track_ord">
                      Track order
                    </Link>
                  </div>
                </div>

                <div className="about_user border-bottom pb-3">
                  <div className="row">
                    <div className="col">
                      <span className="title d-inline-block pb-2">Person</span>
                      <ul className="list-group">
                        <li>Mike Johnatan</li>
                        <li>Phone: 371-295-9131</li>
                        <li>Email: info@mywebsite.com</li>
                      </ul>
                    </div>
                    <div className="col">
                      <span className="title d-inline-block pb-2">Delivery address</span>
                      <ul className="list-group">
                        <li className="address">Lenin strest Moscow Throughway That street 077 Vnukovo, Moscow</li>
                      </ul>
                    </div>
                    <div className="col">
                      <span className="title d-inline-block pb-2">Payment</span>
                      <ul className="list-group">
                        <li className="num_credit">Visa card **** 4216</li>
                        <li>Shipping fee: $12.00</li>
                        <li>Total paid: $412.00</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="products_bought pt-3">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex justify-content-start align-items-start gap-3 mb-2">
                        <div className="image_prod border border-1 p-3 rounded-3">
                          <img src={imgShorts} alt="productShorts" />
                        </div>
                        <div className="txt_product">
                          <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
                          <p className="num_products_price">2x = $339.90</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex justify-content-start align-items-start gap-3 mb-2">
                        <div className="image_prod border border-1 p-3 rounded-3">
                          <img src={imgShorts} alt="productShorts" />
                        </div>
                        <div className="txt_product">
                          <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
                          <p className="num_products_price">2x = $339.90</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex justify-content-start align-items-start gap-3 mb-2">
                        <div className="image_prod border border-1 p-3 rounded-3">
                          <img src={imgShorts} alt="productShorts" />
                        </div>
                        <div className="txt_product">
                          <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
                          <p className="num_products_price">2x = $339.90</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OrderCard>
              <OrderCard>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="id_date">
                    <p className="id_order">
                      Order ID: <span>234</span>
                      <span className="date_order mx-4">Feb 23, Mon, 2021</span>
                    </p>
                    <span className="state_order fw-medium">Confirmed</span>
                  </div>
                  <div className="action_order">
                    <button className="btn cancel_ord mx-2">Cancel order</button>
                    <Link to="/TrackOrder" className="btn track_ord">
                      Track order
                    </Link>
                  </div>
                </div>

                <div className="about_user border-bottom pb-3">
                  <div className="row">
                    <div className="col">
                      <span className="title d-inline-block pb-2">Person</span>
                      <ul className="list-group">
                        <li>Mike Johnatan</li>
                        <li>Phone: 371-295-9131</li>
                        <li>Email: info@mywebsite.com</li>
                      </ul>
                    </div>
                    <div className="col">
                      <span className="title d-inline-block pb-2">Delivery address</span>
                      <ul className="list-group">
                        <li className="address">Lenin strest Moscow Throughway That street 077 Vnukovo, Moscow</li>
                      </ul>
                    </div>
                    <div className="col">
                      <span className="title d-inline-block pb-2">Payment</span>
                      <ul className="list-group">
                        <li className="num_credit">Visa card **** 4216</li>
                        <li>Shipping fee: $12.00</li>
                        <li>Total paid: $412.00</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="products_bought pt-3">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex justify-content-start align-items-start gap-3 mb-2">
                        <div className="image_prod border border-1 p-3 rounded-3">
                          <img src={imgShorts} alt="productShorts" />
                        </div>
                        <div className="txt_product">
                          <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
                          <p className="num_products_price">2x = $339.90</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex justify-content-start align-items-start gap-3 mb-2">
                        <div className="image_prod border border-1 p-3 rounded-3">
                          <img src={imgShorts} alt="productShorts" />
                        </div>
                        <div className="txt_product">
                          <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
                          <p className="num_products_price">2x = $339.90</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex justify-content-start align-items-start gap-3 mb-2">
                        <div className="image_prod border border-1 p-3 rounded-3">
                          <img src={imgShorts} alt="productShorts" />
                        </div>
                        <div className="txt_product">
                          <p className="title_ pb-2">Rucksack Backpack Large Line Mounts</p>
                          <p className="num_products_price">2x = $339.90</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OrderCard>
            </div>
          </div>
        </>
      </Profile>
    </>
  );
};
export default ProfileUser;
