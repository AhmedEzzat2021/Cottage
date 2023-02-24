import React from "react";
import { IoEllipsisVertical, IoLocationSharp } from "react-icons/io5";
import { AddressItem } from "./StyleAdrss";

const ItemAdress = () => {
  return (
    <div className="col-6 mb-3">
      <AddressItem className="rounded d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="ico_loc rounded-circle bg-white d-flex justify-content-center align-items-center ">
            <IoLocationSharp />
          </div>
          <p className="txt_addrs">
            Tashkent city, Street name, Building 123, House 321
            <span className="primary_addrs">(Primary adddress)</span>
          </p>
        </div>

        <button className="btn_edit">
          <IoEllipsisVertical />
        </button>
      </AddressItem>
    </div>
  );
};

export default ItemAdress;
