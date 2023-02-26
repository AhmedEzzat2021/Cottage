import React from "react";
import { Link } from "react-router-dom";
import imageCategory from "../../assets/Images/categoryImage.png";
import Breadcrmb from "./../../Components/breadCrumb/Breadcrumb";
import ProdctCrd from "./../../Components/ReusableComponent/CardProduct/CardProduct";
import SideFiltring from "./../../Components/SideFiltering/SideFiltring";
import { ProductsStyled } from "./StylePageProducts";

const ProductsPage = () => {
  return (
    <ProductsStyled>
      <Breadcrmb>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Clothings</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Men's wear
          </li>
        </ol>
      </Breadcrmb>
      <div className="container pt-3">
        <div className="row">
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
              <div className="row">
                <div className="col-2 d-flex align-items-center flex-column">
                  <div
                    className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                    style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                  >
                    <img src={imageCategory} alt="category" />
                  </div>
                  <p className="title_cteg">Smartphones</p>
                </div>
                <div className="col-2 d-flex align-items-center flex-column">
                  <div
                    className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                    style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                  >
                    <img src={imageCategory} alt="category" />
                  </div>
                  <p className="title_cteg">Gadgets</p>
                </div>
                <div className="col-2 d-flex align-items-center flex-column">
                  <div
                    className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                    style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                  >
                    <img src={imageCategory} alt="category" />
                  </div>
                  <p className="title_cteg">Gaming items</p>
                </div>
                <div className="col-2 d-flex align-items-center flex-column">
                  <div
                    className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                    style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                  >
                    <img src={imageCategory} alt="category" />
                  </div>
                  <p className="title_cteg">Smartwatches</p>
                </div>
                <div className="col-2 d-flex align-items-center flex-column">
                  <div
                    className="img_categ rounded-circle d-flex justify-content-center align-items-center mb-2"
                    style={{ backgroundColor: "#CED7E6", width: "100px", height: "100px" }}
                  >
                    <img src={imageCategory} alt="category" />
                  </div>
                  <p className="title_cteg">Accessories</p>
                </div>
                <div className="col-2 d-flex align-items-center flex-column">
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
            <div className="row Products_in mt-4">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <ProdctCrd addToCard={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductsStyled>
  );
};

export default ProductsPage;
