import React from "react";
import ProdctCrd from "./../../../Components/ReusableComponent/CardProduct/CardProduct";

const WishList = () => {
  return (
    <div className="row bg-white pt-4 rounded">
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
  );
};

export default WishList;
