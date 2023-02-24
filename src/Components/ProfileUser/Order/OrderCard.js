import React from "react";
import { OrderStyle } from "./StyleOrder";
const OrderCard = ({ children }) => {
  return (
    <>
      <OrderStyle className="p-3 rounded mb-4">{children}</OrderStyle>
    </>
  );
};

export default OrderCard;
