import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaTruck, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiHandbagFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Menu } from "./StyleMenuProfile";
const MenuProfile = () => {
  return (
    <Menu>
      <ul className="list-group">
        <li className="item_list">
          <NavLink to="/profileUser" className="link_R d-flex justify-content-start align-items-center">
            <TiHome />
            <span className="txt_list">Account main</span>
          </NavLink>
        </li>
        <li className="item_list">
          <NavLink to="/neworders" className="link_R">
            <RiHandbagFill />
            <span className="txt_list">New orders</span>
          </NavLink>
        </li>
        <li className="item_list">
          <NavLink to="/" className="link_R">
            <FaTruck />
            <span className="txt_list">Orders history</span>
          </NavLink>
        </li>
        <li className="item_list">
          <NavLink to="/wishlist" className="link_R">
            <AiFillHeart />
            <span className="txt_list">My wishlist</span>
          </NavLink>
        </li>

        <li className="item_list">
          <NavLink to="/" className="link_R">
            <IoMdSettings />
            <span className="txt_list">Profile setting</span>
          </NavLink>
        </li>
        <li className="item_list">
          <NavLink to="/" className="link_R">
            <FaUserCircle />
            <span className="txt_list">Log out</span>
          </NavLink>
        </li>
      </ul>
    </Menu>
  );
};

export default MenuProfile;
