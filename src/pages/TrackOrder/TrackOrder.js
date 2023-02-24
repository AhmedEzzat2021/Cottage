import React from "react";
import { CiMemoPad } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FcShipped } from "react-icons/fc";
import { MdLocalShipping } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import OurFeature from "../../Components/ReusableComponent/ourFeature/OurFeature";
import HeaderCheckOut from "./../../Components/Checkout/headerCheckout/headerCheckOut";
import ProgressBar from "./../../Components/Checkout/ProgressBarCheck/ProgressBar";
import { TrackStyle } from "./StyleTrackOrder";

import "./track.css";

const TrackOrder = () => {
  return (
    <TrackStyle>
      <HeaderCheckOut title="Track your order" />
      <ProgressBar />

      <div className="container">
        <div className="row p-5 bg-white rounded shadow-sm mb-5">
          <div className="info_order d-flex justify-content-between align-items-start mb-5">
            <p className="order_id fw-medium text-uppercase">
              Order
              <span className="id_num px-1 fw-bold" style={{ color: "#4a3e4c" }}>
                #y34xdhr
              </span>
            </p>
            <div className="date_order d-flex flex-column gap-2 justify-content-start align-items-end">
              <span className="date">Expected Arrival 01/12/23</span>

              <p className="USPS fw-medium text-uppercase">
                USPS
                <span className="id_num px-1 fw-bold" style={{ color: "#4a3e4c" }}>
                  234094567242423422898
                </span>
              </p>
            </div>
          </div>

          {/* Progressbar for orders  */}
          <div className="lists_prog">
            <ol className="progress_bar_track">
              <li className="step-done">
                <span className="circll"></span>
              </li>
              <li className="step-todo">
                <span className="circll"></span>
              </li>
              <li className="step-todo">
                <span className="circll"></span>
              </li>
              <li className="step-todo">
                <span className="circll"></span>
              </li>
            </ol>

            <div className="row d-flex justify-content-center align-items-center mt-4">
              <ul className="list_icons ">
                <li className="item d-flex align-items-center gap-2">
                  <CiMemoPad />
                  <p className="d-flex flex-column fw-medium">
                    <span>Order</span>
                    <span>Processed</span>
                  </p>
                </li>
                <li className="item d-flex align-items-center gap-2">
                  <MdLocalShipping />
                  <p className="d-flex flex-column fw-medium">
                    <span>Order</span>
                    <span>Shipped</span>
                  </p>
                </li>
                <li className="item d-flex align-items-center gap-2">
                  <FcShipped />
                  <p className="d-flex flex-column fw-medium">
                    <span>Order</span>
                    <span>En Route</span>
                  </p>
                </li>
                <li className="item d-flex align-items-center gap-2">
                  <FaHome />
                  <p className="d-flex flex-column fw-medium">
                    <span>Order</span>
                    <span>Arrived</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Chat with seller */}
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn chat_seller px-5">
              <TbMessageCircle2 /> Chat with seller
            </button>
          </div>
        </div>

        <OurFeature />
      </div>
    </TrackStyle>
  );
};

export default TrackOrder;
