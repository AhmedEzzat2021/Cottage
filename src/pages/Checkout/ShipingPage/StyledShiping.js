import styled from "styled-components";

export const ShipingPaymentStyle = styled.div`
  padding: 8rem 0 0;
  background-color: #f5f5f5;
  @media (max-width: 991px) {
    padding-top: 12rem;
  }
  .body_page {
    .shipping_serv {
      padding-right: 2rem;

      .title_sid .sub_title {
        color: #9aa2b1;
      }
      @media (max-width: 991px) {
        padding: 0 10px;
        .title_sid {
          text-align: center;
        }
        .sub_title {
          text-align: center;
          padding: 0 10px;
        }
      }
    }

    .side_summary {
      height: fit-content;
      .title_side {
        font: 21px;
      }
      @media (max-width: 991px) {
        margin-top: 15px;
      }
    }
  }
  // style for input radio service shapping
  .serv_options {
    transition: all 0.3s ease-in-out;
    display: grid;
    grid-template-columns: 5% auto;
    &:hover {
      background-color: #edf8eb;
    }
    label {
      cursor: pointer;
      position: relative;
    }
    input {
      appearance: none;
      background-color: #fff;
      margin: 0;
      color: #9aa2b1;
      width: 1.15em;
      height: 1.15em;
      border: 1px solid #9aa2b1;
      border-radius: 50%;
      opacity: 0.5;
      display: grid;
      place-content: center;
      &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #50b83c;
      }
      &:checked {
        opacity: 1;
      }
      label::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      &:checked + div {
        .text_ {
          color: #50b83c;
        }
        .Currency {
          transition: 0.3s;
          color: #50b83c;
        }
        .ico_currn {
          background-color: #50b83c;
        }
      }
      &:checked::before {
        transform: scale(1);
      }
    }
    &:first-child {
      img {
        background-color: #4a3e4c;
        width: 80px;
        padding: 10px;
        border-radius: 10px;
      }
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      justify-content: flex-start;
      gap: 10px;
    }
  }

  // style for payment service
  label {
    cursor: pointer;
    position: relative;

    .cont__ {
      transition: all 0.3s;
    }
    .cont__:hover {
      background-color: #f9fafb;
    }
    input {
      appearance: none;
      background-color: #fff;
      margin: 0;
      color: #9aa2b1;
      width: 1.15em;
      height: 1.15em;
      border: 1px solid #9aa2b1;
      border-radius: 50%;
      opacity: 0.5;
      display: grid;
      place-content: center;
      &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #454f5b;
      }
      &:checked {
        opacity: 1;
      }
      label::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      &:checked::before {
        transform: scale(1);
      }
    }
  }
  hr {
    color: #aaaeb3;
  }
  .text_credit {
    color: #9aa2b1;
  }
  .L-routes {
    .b_info {
      background-color: #6a7f92;
      color: #fff;
    }
    ._review {
      background-color: #4a3e4c;
      color: #fff;
    }
  }
`;

export const PayForm = styled.div`
  input {
    border: none;
    border-radius: 0;
    &:focus {
      box-shadow: none;
    }
    &::placeholder {
      padding-left: 1rem;
      color: #9aa2b1;
    }
  }
  .dropdown {
    ul {
      transition: all 0.3s;
    }
    button {
      background: none;
      border: none;
      outline: none;
      color: #9aa2b1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
      &:focus {
        background: none;
        color: #9aa2b1;
      }
    }
    svg {
      color: #9aa2b1;
      font-size: 1.3rem;
    }
    .dropdown-toggle::after {
      display: none;
    }
  }
  .btn_submit {
    background-color: #637381;
    color: #fff;
  }
`;
//#EDF8EB green light
//#50B83C grren big
// #F6F8F9 hr
