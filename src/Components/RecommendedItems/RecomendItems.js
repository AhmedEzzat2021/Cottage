import React from "react";
import ProdctCrd from "./../ReusableComponent/CardProduct/CardProduct";
import { StyleCardRecom } from "./StyleRecomend";

const RecomendItems = () => {
  return (
    <>
      <div className="heading py-3" style={{ marginLeft: "-10px" }}>
        <h4>Recommended items</h4>
      </div>
      <StyleCardRecom className="row">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 d-flex justify-content-center align-items-center">
            <ProdctCrd newPaddge={true} addToFav={true} />
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
      </StyleCardRecom>
    </>
  );
};

export default RecomendItems;
