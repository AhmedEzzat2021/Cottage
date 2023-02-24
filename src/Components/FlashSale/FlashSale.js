import React from "react";
import ProdctCrd from "../ReusableComponent/CardProduct/CardProduct";

import { FlashSaleStyle } from "./StyledFlashSale";

const FlashSale = () => {
  return (
    <>
      <FlashSaleStyle className="container">
        <div className="col title_flashSale rounded-3 mb-3">
          <h3 className="fw-normal text-uppercase">
            Flash Sale <span className="fs-6">UP TO 70%</span>
          </h3>
        </div>
        <>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
              <ProdctCrd addToFav={true} />
            </div>
          </div>
        </>
      </FlashSaleStyle>
    </>
  );
};

export default FlashSale;
