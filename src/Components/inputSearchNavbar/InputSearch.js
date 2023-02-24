import React from "react";
import { StyleSearch } from "./InpStyle";

const InputSearch = () => {
  return (
    <StyleSearch className=" w-100 rounded-2  position-relative">
      <div class="input_group">
        <select class="form-select" aria-label="Default select example">
          <option selected>All</option>
          <option value="1">Men clothes</option>
          <option value="2">Makeup</option>
          <option value="3">Perfumes</option>
          <option value="3">Kids</option>
          <option value="3">Electronic</option>
          <option value="3">Furniture</option>
        </select>
        <div className="inpp__">
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="ex: house for sale, nissan, LCD"
          />
        </div>
      </div>
    </StyleSearch>
  );
};

export default InputSearch;
