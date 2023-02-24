import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import backLogin from "../../../assets/Images/backLogin.png";
import logoGoogle from "../../../assets/Images/logo-google.png";
import logoSign from "../../../assets/Images/Logo.png";
import BottomBar from "../../../Components/ReusableComponent/Footer/bottomBar/BottomBar";
import { SignInStyle } from "./StyleSignIn";

const SignIn = () => {
  return (
    <>
      <SignInStyle className="_signIn_">
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
                <h2 className="py-3">Sign in</h2>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control w-100"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="exampleInputPassword1" className="form-label ">
                      Password
                    </label>
                    <a href="#/" style={{ textDecoration: "none", color: "gray" }}>
                      Forgot password
                    </a>
                  </div>
                  <input type="password" className="form-control w-100" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Log In
                </button>
                <div className="_or d-flex justify-content-center align-items-center my-3 position-relative">
                  <hr className="w-75" />
                </div>

                <div className="sign_with">
                  <div className="btn_google btn w-100">
                    <img src={logoGoogle} alt="logoGoogle" />
                    <span className="px-3">Continue with Google</span>
                  </div>
                  <div className="btn_faceboK btn w-100 mt-2">
                    <RiFacebookBoxFill />
                    <span className="px-3">Continue with Facebook</span>
                  </div>
                </div>

                <div className="foot_form d-flex justify-content-center w-100 p-4">
                  <span>
                    Don't have an account?<Link to="/signup"> Register now</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SignInStyle>
      <BottomBar />
    </>
  );
};

export default SignIn;
