import styled from "styled-components";

export const GuestStyle = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  padding-top: 3rem;
  .check_content {
    .form-control {
      background-color: #fafafa;
      &::placeholder {
        color: #9da1a7;
      }
    }
    .form-check-input {
      margin-right: 10px;
      font-size: 21px;
      border: 1px solid #4a3e4c;
      box-shadow: none;
      transition: all 0.2s;
      margin-top: 0;
      &:checked {
        background-color: #4a3e4c;
      }
    }
    hr {
      color: #9da1a7;
    }
    .inp_choose {
      .cont__ {
        cursor: pointer;

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
            box-shadow: inset 1em 1em #4a3e4c;
          }
          &:checked {
            opacity: 1;
            .cont__ {
              border: 1px solid #4a3e4c;
            }
          }
          &:checked::before {
            transform: scale(1);
          }
        }
        .text_credit {
          margin-top: -5px;

          .title {
            color: #545454;
          }
          .sub_title {
            color: #9da1a7;
            font-size: 13px;
          }
        }
      }
    }
    .info__guest {
      .next_step {
        background-color: #4a3e4c;
        color: #fff;
      }
      .b_home {
        color: #4a3e4c;
      }
    }
  }

  .sc-hHTYSt {
    padding: 0 !important;
  }
  .discount_input {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1.5rem;
    input {
      &::placeholder {
        color: #9da1a7;
      }
    }
  }

  .list_products {
    .count_product {
      background-color: #989898;
      color: #fff;
      position: absolute;
      right: -10px;
      top: -10px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
`;
