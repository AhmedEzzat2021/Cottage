import React from "react";
import { Link } from "react-router-dom";
import backLogin from "../../../assets/Images/backLogin.png";
import logoSign from "../../../assets/Images/Logo.png";
import BottomBar from "./../../../Components/ReusableComponent/Footer/bottomBar/BottomBar";
import { SignUpStyle } from "./styleSignUp";

const SignUp = () => {
  return (
    <>
      <SignUpStyle className="_signIn_">
        <img src={backLogin} alt="imageBack" className="backimgForm" />
        <span className="overlay"></span>
        <div className="row align-align-items-stretch justify-content-around w-100">
          <div className="col-sm-12 col-lg-5 img_sign ">
            <div className="container">
              <div className="cont_head d-flex flex-column justify-content-start align-items-center gap-5 pt-5">
                <div className="text text-center">
                  <h4 className="mb-4">Shop everything in one place</h4>
                  <h2 className="">#1 online Mall at Saudi Arabia</h2>
                </div>
                <img src={logoSign} alt="logo" />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-5 f-cnt">
            <div className="form-control shadow-sm">
              <form className="container">
                <h2 className="py-3">Register</h2>
                <div className="mb-3 text_inputs_ row">
                  <div className="col">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" aria-label="First name" />
                  </div>

                  <div className="col">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" aria-label="Last name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="input-group mb-3">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    US +1
                  </button>
                  <ul className="dropdown-menu">
                    <li>Code phone</li>
                  </ul>
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>
                <div className="mb-3">
                  <label htmlFor="addpass" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" placeholder="At least 6 characters." id="addpass" />
                </div>
                <div className="mb-3">
                  <label htmlFor="addpass" className="form-label">
                    Repeat password
                  </label>
                  <input type="password" className="form-control" id="addpass" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Log In
                </button>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">
                    I agree with Terms and Conditions
                  </label>
                </div>
                <div className="_or d-flex justify-content-center align-items-center my-1 position-relative">
                  <hr className="w-75" />
                </div>
                <div className="foot_form d-flex justify-content-center w-100 p-2">
                  <span>
                    Already have a account<Link to="/signin"> Sign in</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SignUpStyle>
      <BottomBar />
    </>
  );
};

export default SignUp;
