import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./../../Components/ReusableComponent/Footer/Footer";
import NavbarComp from "./../../Components/ReusableComponent/Navbar/NavbarComp";
const Layout = () => {
  return (
    <div>
      <NavbarComp />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
