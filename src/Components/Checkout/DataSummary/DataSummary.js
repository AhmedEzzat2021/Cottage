import React from "react";
import { DataSummstyle } from "./StyleDataSumm";

const DataSummary = ({ children }) => {
  return <DataSummstyle className="data_summary px-3 fw-normal">{children}</DataSummstyle>;
};

export default DataSummary;
