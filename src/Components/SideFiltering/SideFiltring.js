import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { StyleFilter } from "./StyleFilter";

const SideFiltring = () => {
  return (
    <StyleFilter className="rounded shadow-sm">
      <div className="accordion">
        {/* ========== List filter categories ========== */}
        <div className="accordion-item px-1">
          <h2 className="accordion-header">
            <button
              className="accordion-button d-flex align-items-center justify-content-between px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#categories"
              aria-expanded="true"
              aria-controls="categories"
            >
              Related category
              <MdKeyboardArrowDown />
            </button>
          </h2>
          <div id="categories" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body px-0 pt-0">
              <ul class="list-group px-0">
                <li class="list-group-item rounded">Winter clotes</li>
                <li class="list-group-item rounded">Summer clothes</li>
                <li class="list-group-item rounded">Category name</li>
                <li class="list-group-item rounded">Underwears</li>
                <li class="list-group-item rounded">Jeans jackets</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== List filter Material ========== */}
        <div class="accordion-item px-1">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button d-flex align-items-center justify-content-between px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Material"
              aria-expanded="false"
              aria-controls="Material"
            >
              Material
              <MdKeyboardArrowDown />
            </button>
          </h2>
          <div id="Material" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body pt-0 px-3">
              <form>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkAll" />
                  <label class="form-check-label" for="checkAll">
                    Check all
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Jeans" />
                  <label class="form-check-label" for="Jeans">
                    Jeans
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Leather" />
                  <label class="form-check-label" for="Leather">
                    Leather
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Cotton" />
                  <label class="form-check-label" for="Cotton">
                    Cotton
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Plastic" />
                  <label class="form-check-label" for="Plastic">
                    Plastic
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ========== List filter Brand ========== */}
        <div class="accordion-item px-1">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button d-flex align-items-center justify-content-between px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Condition"
              aria-expanded="false"
              aria-controls="Condition"
            >
              Condition
              <MdKeyboardArrowDown />
            </button>
          </h2>
          <div id="Condition" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body pt-0 px-3">
              <form className="d-flex flex-column gap-3">
                <label className="inp_choose">
                  <div className="cont__ d-flex justify-content-start align-items-center gap-2">
                    <input type="radio" name="condition" />
                    <span>Brand new</span>
                  </div>
                </label>
                <label className="inp_choose">
                  <div className="cont__ d-flex justify-content-start align-items-center gap-2">
                    <input type="radio" name="condition" />
                    <span>Second hand</span>
                  </div>
                </label>
                <label className="inp_choose">
                  <div className="cont__ d-flex justify-content-start align-items-center gap-2">
                    <input type="radio" name="condition" />
                    <span>Refurbished</span>
                  </div>
                </label>
                <label className="inp_choose">
                  <div className="cont__ d-flex justify-content-start align-items-center gap-2">
                    <input type="radio" name="condition" />
                    <span>Something</span>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* ========== List filter Prices ========== */}
        <div class="accordion-item px-1">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button d-flex align-items-center justify-content-between px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Prices"
              aria-expanded="false"
              aria-controls="Prices"
            >
              Prices
              <MdKeyboardArrowDown />
            </button>
          </h2>
          <div id="Prices" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body pt-0 px-3">
              <div class="wrapper">
                <div class="contain">
                  <div class="slider-track"></div>
                  <input type="range" min="0" max="100" id="slider-1" />
                  <input type="range" min="0" max="100" id="slider-2" />
                </div>
              </div>
              <form className=" min__max">
                <div className="inpts_m d-flex justify-content-between gap-3">
                  <div>
                    <label>Min</label>
                    <input type="number" className="form-control" placeholder="$0.00" />
                  </div>
                  <div>
                    <label>Max</label>
                    <input type="number" className="form-control" placeholder="$0.00" />
                  </div>
                </div>
                <button className="btn border w-100 mt-3">Apply</button>
              </form>
            </div>
          </div>
        </div>

        {/* ========== List filter Ratings stars ========== */}
        <div class="accordion-item px-1">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button d-flex align-items-center justify-content-between px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Ratings"
              aria-expanded="false"
              aria-controls="Ratings"
            >
              Ratings
              <MdKeyboardArrowDown />
            </button>
          </h2>
          <div id="Ratings" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body pt-0 px-3">
              <form>
                <div class="form-check five_fill rating mb-0">
                  <input class="form-check-input" type="checkbox" value="" id="five_fill" />
                  <label class="form-check-label" for="five_fill">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </label>
                </div>
                <div class="form-check four_fill rating mb-0">
                  <input class="form-check-input" type="checkbox" value="" id="four_fill" />
                  <label class="form-check-label" for="four_fill">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </label>
                </div>
                <div class="form-check three_fill rating mb-0">
                  <input class="form-check-input" type="checkbox" value="" id="three_fill" />
                  <label class="form-check-label" for="three_fill">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </label>
                </div>
                <div class="form-check two_fill rating mb-0">
                  <input class="form-check-input" type="checkbox" value="" id="two_fill" />
                  <label class="form-check-label" for="two_fill">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyleFilter>
  );
};

export default SideFiltring;
