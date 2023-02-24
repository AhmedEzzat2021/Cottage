import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import logOut from "../../assets/Images/logout.png";
import { SideMenu } from "./styledHome/SideMenuStyle";
const SideBar = () => {
  return (
    <SideMenu>
      <Link to="/cottage" className="logo">
        <img src={Logo} alt="logo" className="img_logo" />
      </Link>
      <div className="list__ shop_categories">
        <h3 className="fw-normal title_list">Shop by category</h3>
        <ul className="d-flex align-items-start flex-column" id="list-croll">
          <li className="item_list">
            <Link to="/ProductsPage">Men clothes</Link>
          </li>
          <li className="item_list">
            <Link to="/ProductsPage">Makeup</Link>
          </li>
          <li className="item_list">
            <Link to="/ProductsPage">Perfumes</Link>
          </li>
          <li className="item_list">
            <Link to="/ProductsPage">Kids </Link>
          </li>
          <li className="item_list">
            <Link to="/ProductsPage">Electronic</Link>
          </li>
          <li className="item_list">
            <Link to="/ProductsPage">Furniture</Link>
          </li>
        </ul>
      </div>

      <div className="list__ my_account">
        <h3 className="fw-normal title_list">My ACCOUNT</h3>
        <ul className="d-flex align-items-start flex-column">
          <li className="item_list">
            <Link to="/profileUser">Profile</Link>
          </li>
          <li className="item_list">
            <Link to="/neworders">My Orders</Link>
          </li>
          <li className="item_list">
            <Link to="/profileUser">My Addresses</Link>
          </li>
        </ul>
      </div>

      <div className="list__ my_seller_account">
        <h3 className="fw-normal title_list">Your Seller Account</h3>
        <ul className="d-flex align-items-start flex-column">
          <li className="item_list">
            <Link to="/seller">Profile</Link>
          </li>
          <li className="item_list">
            <Link to="/neworders">My Orders</Link>
          </li>
          <li className="item_list">
            <Link to="/seller">My Products</Link>
          </li>
        </ul>
      </div>

      <button className="btn">
        <img src={logOut} alt="logout" />
        SIGN OUT
      </button>
    </SideMenu>
  );
};

export default SideBar;
