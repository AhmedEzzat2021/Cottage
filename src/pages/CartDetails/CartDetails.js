import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import addProd from "../../assets/Images/add_prod.svg";
import IconAsk from "../../assets/Images/conversation.png";
import IconCart from "../../assets/Images/Icon Color.png";
import ImageBrand from "../../assets/Images/image_brand.png";
import minaas from "../../assets/Images/minas.svg";
import SimilarProduct from "../../Components/Cart/SimilarProduct/SimilarProduct";
import Breadcrmb from "./../../Components/breadCrumb/Breadcrumb";
import GalleryProduct from "./../../Components/Cart/productGallery/ProductGallery";
import { OverView, ProdDetails } from "./StyleDetails";

const ProductDetails = () => {
  const [toggleTab, setToggleRab] = useState(1);
  const toggleTabs = index => {
    setToggleRab(index);
  };
  return (
    <>
      <Breadcrmb>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/cottage">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/ProductsPage">Clothings</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Men's wear
          </li>
        </ol>
      </Breadcrmb>
      <ProdDetails className="container pt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 mb-4">
            <GalleryProduct />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="img_brand d-flex  justify-content-start ">
              <img src={ImageBrand} alt="imageBrand" />
            </div>

            <div className="title_Brand w-75 fw-normal py-3">
              <p className="">Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie </p>
            </div>

            <div className="rate_brand pb-4 d-inline d-flex justify-content-start align-items-center">
              <div className="stars_rate">
                <RiStarSFill className="fill_st" />
                <RiStarSFill className="fill_st" />
                <RiStarSFill className="fill_st" />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <span className="num_rate">9.3</span>
              <span className="mx-3 point"></span>
              <span className="inStoke fw-medium">In stock</span>
            </div>

            <div className="price pb-3">
              <span className="price_num">$98.00</span>
              <span className="per_itm px-5">/ per item</span>
            </div>

            <p className="description w-100 pb-5">
              Modern look and quality demo item is a streetwear-inspired collection that continues to break away from
              the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
              men.
            </p>

            <ul className="info_product pb-3">
              <li className="list mb-3">
                <span className="title_info">Type</span>
                <span className="Result_info">Regular</span>
              </li>
              <li className="list mb-3">
                <span className="title_info">Color</span>
                <span className="Result_info">Brown</span>
              </li>
              <li className="list mb-3">
                <span className="title_info">Delivery</span>
                <span className="Result_info">Russia, USA & Europe</span>
              </li>
              <li className="list mb-3">
                <span className="title_info">Brand</span>
                <span className="Result_info">Reebook</span>
              </li>
            </ul>

            <hr className="w-100" />

            <div className="list_colors w-100">
              <h3 className="tit_color fs-6">Colors</h3>
              <ul className="list_ d-flex justify-content-start align-items-center gap-2">
                <li className="item_color"></li>
                <li className="item_color"></li>
                <li className="item_color"></li>
                <li className="item_color"></li>
              </ul>
            </div>

            <hr className="w-100" />

            <form className="count_size d-flex justify-content-start align-items-center py-2 gap-3">
              <div className="size_">
                <label htmlFor="cars" className="fs-6">
                  Size
                </label>
                <select name="cars" id="cars" className="w-100 size_btn">
                  <option value="volvo">XXL</option>
                  <option value="saab">XL</option>
                  <option value="opel">M</option>
                  <option value="audi">SM</option>
                </select>
              </div>
              <div className="Quantity_">
                <label htmlFor="Quantity" className="fs-6">
                  Quantity
                </label>
                <div className="inp_qty w-100 d-flex justify-content-between align-items-center bg-white fs-4">
                  <button className="btn">
                    <img src={minaas} alt="minas" />
                  </button>
                  <span className="c_o_u_n">0</span>
                  <button className="btn">
                    <img src={addProd} alt="add" />
                  </button>
                </div>
              </div>
            </form>

            <hr className="w-100" />
            <div className="footer__details pb-5 pt-3 d-flex justify-content-start align-items-center flex-wrap gap-2">
              <button className="btn seller_as">
                <img src={IconAsk} alt="iconAsk" /> Ask the seller
              </button>
              <button className="btn add_cart">
                <img src={IconCart} alt="iconAsk" /> Add to cart
              </button>
              <div className="fav_io btn">
                <FiHeart />
                <span className="num">33</span>
              </div>
            </div>
          </div>
        </div>
      </ProdDetails>
      <OverView>
        <div className="container py-5">
          <div className="row d-flex">
            <div className="col-sm-12 col-lg-8 mb-4">
              <div className="bg-white shadow-sm rounded-3">
                <div className="tabs_ px-5 d-flex justify-content-start align-items-center gap-5 border-bottom">
                  <span className={toggleTab === 1 ? "tab_li active_tab" : "tab_li"} onClick={() => toggleTabs(1)}>
                    Overview
                  </span>
                  <span className={toggleTab === 2 ? "tab_li active_tab" : "tab_li"} onClick={() => toggleTabs(2)}>
                    Specification
                  </span>
                  <span className={toggleTab === 3 ? "tab_li active_tab" : "tab_li"} onClick={() => toggleTabs(3)}>
                    Reviews <span>(24)</span>
                  </span>
                </div>
                <div className="container_content p-4">
                  <div className={toggleTab === 1 ? "content_tabs active_content" : "content_tabs"}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                  <div className={toggleTab === 2 ? "content_tabs active_content" : "content_tabs"}>
                    <p>Content two</p>
                  </div>
                  <div className={toggleTab === 3 ? "content_tabs active_content" : "content_tabs"}>
                    <p>content 3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 mb-4">
              <div className=" bg-white shadow-sm rounded-3 p-4">
                <SimilarProduct />
              </div>
            </div>
          </div>
        </div>
      </OverView>
    </>
  );
};

export default ProductDetails;
