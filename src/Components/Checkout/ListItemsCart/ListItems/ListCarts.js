import React from "react";
import ItemCart from "./../ItemCartCheckout/ItemCart";

const ListCarts = () => {
  return (
    <ul className="pt-4">
      <ItemCart />
      <ItemCart />
      <ItemCart />
      <ItemCart />
    </ul>
  );
};

export default ListCarts;
