import React from "react";
import { Link } from "react-router-dom";
import { BoxStyle } from "./Style";

const AnAccount = () => {
  return (
    <BoxStyle className="d-flex justify-content-between align-items-center rounded def_shadow p-3 bg-white">
      <div>
        <h4 className="fw-normal">Have an account?</h4>
        <p>By creating account you will get more benefits </p>
      </div>
      <div className="routes">
        <Link to="/signin" className="btn border mx-2">
          Sign in
        </Link>
        <Link to="/signup" className="btn r_signUp">
          Create account
        </Link>
      </div>
    </BoxStyle>
  );
};

export default AnAccount;
