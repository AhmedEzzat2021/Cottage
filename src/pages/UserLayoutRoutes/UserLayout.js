import React from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import MenuProfile from "../../Components/ProfileUser/sideMenu/MenuProfile";
import Breadcrmb from "./../../Components/breadCrumb/Breadcrumb";
import Footer from "./../../Components/ReusableComponent/Footer/Footer";
import NavbarComp from "./../../Components/ReusableComponent/Navbar/NavbarComp";

const UserLayout = () => {
  return (
    <>
      <NavbarComp />
      <Breadcrmb>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Account</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Profile main
          </li>
        </ol>
      </Breadcrmb>
      <div style={{ backgroundColor: "#f7f7f7", paddingTop: "3rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <MenuProfile />
            </div>
            <div className="col-9 mb-3">
              <ScrollRestoration />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
