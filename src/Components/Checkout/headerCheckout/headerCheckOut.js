import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { StyledHeaderCheck } from "./StyleHeader";

const HeaderCheckOut = ({ title }) => {
  return (
    <StyledHeaderCheck className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="title ">
          <h3>{title}</h3>
        </div>
        <Link to="/cottage" className="b_t_shop" style={{ color: "#4a3e4c", borderColor: "#4a3e4c" }}>
          <IoIosArrowBack />
          <span className="px-1">Back to shopping</span>
        </Link>
      </div>
    </StyledHeaderCheck>
  );
};

export default HeaderCheckOut;
