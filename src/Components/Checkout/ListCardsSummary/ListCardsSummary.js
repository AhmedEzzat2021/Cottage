import React from "react";
import CardSummary from "../CardsProductSummary/CardSummary";
import { ListCards } from "./StyleList";

const ListCardsSummary = () => {
  return (
    <ListCards className="row p-4">
      <div className="col">
        <CardSummary />
        <CardSummary />
        <CardSummary />
        <CardSummary />
        <CardSummary />
      </div>
    </ListCards>
  );
};

export default ListCardsSummary;
