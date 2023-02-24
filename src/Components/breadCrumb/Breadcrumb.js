import React from "react";
import { Bread } from "./StyleBreadCrumb";

const Breadcrmb = ({ children }) => {
  return (
    <Bread aria-label="breadcrumb">
      <div className="container py-3">{children}</div>
    </Bread>
  );
};

export default Breadcrmb;
