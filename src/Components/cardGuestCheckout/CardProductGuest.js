import React from "react";
import { CardGuest } from "./StyleCard";

const CardProductMini = ({ children }) => {
  return (
    <>
      <CardGuest className="d-flex justify-content-start align-items-center gap-2 mb-4">{children}</CardGuest>
    </>
  );
};

export default CardProductMini;
