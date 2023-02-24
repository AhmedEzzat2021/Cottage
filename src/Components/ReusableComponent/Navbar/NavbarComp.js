import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import avatarImg from "../../../assets/Images/avatar.png";
import iconCart from "../../../assets/Images/cart.png";
import logo from "../../../assets/Images/Logo.png";
import SideBar from "./../../HomePage/SideBar";
import InputSearch from "./../../inputSearchNavbar/InputSearch";
import { Navbar } from "./styledNav";

const NavbarComp = () => {
  const [sidebar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar(prevState => !sidebar);
  };
  return (
    <Navbar className="shadow-sm fixed-top">
      <div
        className={
          sidebar
            ? "sideMenu d-flex justify-content-start px-4 pt-5 align-items-start shadow-sm open--sidemenu"
            : "sideMenu"
        }
      >
        <SideBar />
      </div>
      <span
        className={sidebar ? "backdrop_overlay backdrop_overlay--open" : "backdrop_overlay"}
        onClick={toggleSidebar}
      ></span>
      <div className="container">
        <div className="row cont__nav">
          <div className="col-sm-12 col-lg-3 d-flex justify-content-start align-items-center gap-5 logo__menu">
            <span className="menu rounded-circle" onClick={toggleSidebar}>
              <RxHamburgerMenu />
            </span>
            <Link to="/cottage" className="logo">
              <img src={logo} alt="logo" style={{ width: "7rem" }} />
            </Link>
          </div>
          <div className="col-12 col-lg-6 serch_cont col d-flex justify-content-center align-items-center ">
            <InputSearch />
          </div>
          <div className="col-12 col-lg-3 L_cont col d-flex justify-content-end align-items-center gap-4">
            <button className="lang_nav">العربية</button>
            <div className="login_user d-flex justify-content-between align-items-center gap-2">
              <span className="avatar">
                <img src={avatarImg} alt="avatar" />
              </span>
              <Link to="/signin" className="nameUser" style={{ color: "#fff", textDecoration: "none" }}>
                Sign In <FaAngleDown />
              </Link>
            </div>
            <Link to="/shoppingCart" className="cart_nav">
              <span className="num_in_cart">0</span>
              <span>
                <img src={iconCart} alt="cart" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
