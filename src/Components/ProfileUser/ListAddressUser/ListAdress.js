import React from "react";
import { IoAddSharp } from "react-icons/io5";
import ItemAdress from "./../ItemAdress/ItemAdress";

const ListAdress = () => {
  return (
    <>
      <div className="row mt-4">
        <ItemAdress />
        <ItemAdress />
      </div>
      <button
        className="btn"
        style={{ border: "1px solid #E0E0E0", paddingRight: "2rem", color: "#4a3e4c", fontWeight: 500 }}
      >
        <IoAddSharp style={{ marginRight: "5px", fontSize: "20px" }} />
        Add new address
      </button>
    </>
  );
};

export default ListAdress;
