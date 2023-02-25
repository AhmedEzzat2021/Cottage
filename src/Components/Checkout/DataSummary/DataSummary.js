import React from "react";
import { DataSummstyle } from "./StyleDataSumm";

const DataSummary = () => {
  return (
    <DataSummstyle className="p-3 fw-normal">
      <li className="d-flex justify-content-between align-items-center mb-2">
        <span>Subtotal</span>
        <span>$1403.97</span>
      </li>
      <li className="d-flex justify-content-between align-items-center mb-2">
        <span>Shipping</span>
        <span className="val_discount">-</span>
      </li>
      <li className="d-flex justify-content-between align-items-center mb-2">
        <span>Tax</span>
        <span className="val_tax">+ $14.00</span>
      </li>
      <li className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-3">
        <span>Discount</span>
        <span className="val_discount">- $60.00</span>
      </li>
      <li className="d-flex justify-content-between align-items-center mb-2">
        <span>Total:</span>
        <span className="fw-medium fs-5">$1357.97</span>
      </li>
    </DataSummstyle>
  );
};

export default DataSummary;
