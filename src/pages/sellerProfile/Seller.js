import React from "react";
import imageCategory from "../../assets/Images/categoryImage.png";
import CoverImg from "../../assets/Images/cover_photo.jpg";
import ProfileImage from "../../assets/Images/profile_photo.jpg";
import ProdctCrd from "./../../Components/ReusableComponent/CardProduct/CardProduct";
import SideFiltring from "./../../Components/SideFiltering/SideFiltring";
import { StyleSeller } from "./Style";
const Seller = () => {
  return (
    <StyleSeller>
      {/* Header Section */}
      <div className="header_page">
        <img
          src={CoverImg}
          alt="cover"
          className="w-100 rounded-bottom shadow-sm cover_img"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="container">
          <div className="seller_info d-flex flex-column align-items-start justify-content-center">
            <img
              src={ProfileImage}
              alt="profile"
              className="img-thumbnail shadow-lg rounded-circle"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <div className="data_seller pt-2">
              <h4 className="fw-bold">Seller Name</h4>
              <p className="fs-6">Info about seller Info about seller</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-lg-3 mb-4">
              <SideFiltring />
            </div>
            <div className="col-sm-12 col-lg-9 mb-3">
              {/* Header of filtring products and sort */}
              <div className="header_filter d-flex justify-content-between align-items-center">
                <span>60 styles found</span>
                <div className="filter_design d-flex align-items-start">
                  <select class="form-select mx-2">
                    <option value="1">Sort by price</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              {/* list categories products */}
              <div className="ctegories_products mt-4">
                <div className="lists_ d-flex justify-content-between flex-wrap">
                  <div className="d-flex align-items-center flex-column">
                    <div
                      className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                      style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                    >
                      <img src={imageCategory} alt="category" />
                    </div>
                    <p className="title_cteg">Smartphones</p>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <div
                      className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                      style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                    >
                      <img src={imageCategory} alt="category" />
                    </div>
                    <p className="title_cteg">Gadgets</p>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <div
                      className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                      style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                    >
                      <img src={imageCategory} alt="category" />
                    </div>
                    <p className="title_cteg">Gaming items</p>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <div
                      className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                      style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                    >
                      <img src={imageCategory} alt="category" />
                    </div>
                    <p className="title_cteg">Smartwatches</p>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <div
                      className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                      style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                    >
                      <img src={imageCategory} alt="category" />
                    </div>
                    <p className="title_cteg">Accessories</p>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <div
                      className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                      style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                    >
                      <img src={imageCategory} alt="category" />
                    </div>
                    <p className="title_cteg">Other items</p>
                  </div>
                </div>
              </div>

              {/* list Products */}
              <div className="row mt-4">
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center align-items-center">
                  <ProdctCrd addToCard={true} addToFav={true} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center align-items-center">
                  <ProdctCrd addToCard={true} addToFav={true} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center align-items-center">
                  <ProdctCrd addToCard={true} addToFav={true} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center align-items-center">
                  <ProdctCrd addToCard={true} addToFav={true} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center align-items-center">
                  <ProdctCrd addToCard={true} addToFav={true} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center align-items-center">
                  <ProdctCrd addToCard={true} addToFav={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleSeller>
  );
};

export default Seller;
