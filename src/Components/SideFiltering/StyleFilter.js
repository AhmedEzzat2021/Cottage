import styled from "styled-components";

export const StyleFilter = styled.div`
  border: 1px solid #e0e0e0;
  .accordion-item {
    box-shadow: none;
    .accordion-button {
      box-shadow: none;
      color: #9da1a7;
      svg {
        font-size: 24px;
      }
    }
    .accordion-button::after {
      display: none;
    }
    .accordion-button:not(.collapsed) {
      background: none;
      box-shadow: none;
    }
    .accordion-body {
      .list-group-item {
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 10px;
        color: #545454;
        &:hover {
          background-color: RGBA(74, 62, 76, 0.2);
          color: #4a3e4c;
        }
      }
      .form-check {
        margin-bottom: 0.5rem;
        input {
          transition: all 0.3s ease;
          border-color: #d9d9d9;
          width: 20px;
          height: 20px;
          box-shadow: none;
          &:checked {
            box-shadow: none;
          }
        }
        label {
          padding-top: 2px;
          padding-left: 5px;
          cursor: pointer;
        }
      }
      .inp_choose {
        .cont__ {
          cursor: pointer;

          input {
            appearance: none;
            background-color: #fff;
            margin: 0;
            color: #9aa2b1;
            width: 22px;
            height: 22px;
            border: 3px solid #9aa2b1;
            border-radius: 50%;
            opacity: 0.5;
            display: grid;
            place-content: center;

            &::before {
              content: "";
              width: 11px;
              height: 11px;
              border-radius: 50%;
              transform: scale(0);
              transition: 120ms transform ease-in-out;
              box-shadow: inset 1em 1em #4a3e4c;
            }
            &:checked {
              opacity: 1;
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
          }
        }
      }

      // style inputs range
      .wrapper {
        position: relative;
        border-radius: 10px;
        .contain {
          position: relative;
          width: 100%;
          height: 50px;
          input[type="range"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 100%;
            outline: none;
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            background-color: transparent;
            pointer-events: none;
          }
          .slider-track {
            width: 100%;
            height: 5px;
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            border-radius: 5px;
            background-color: #ddd;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            height: 5px;
          }
          input[type="range"]::-moz-range-track {
            -moz-appearance: none;
            height: 5px;
          }
          input[type="range"]::-ms-track {
            appearance: none;
            height: 5px;
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 1.7em;
            width: 1.7em;
            background-color: #3264fe;
            cursor: pointer;
            margin-top: -9px;
            pointer-events: auto;
            border-radius: 50%;
          }
          input[type="range"]::-moz-range-thumb {
            -webkit-appearance: none;
            height: 1.7em;
            width: 1.7em;
            cursor: pointer;
            border-radius: 50%;
            background-color: #3264fe;
            pointer-events: auto;
          }
          input[type="range"]::-ms-thumb {
            appearance: none;
            height: 1.7em;
            width: 1.7em;
            cursor: pointer;
            border-radius: 50%;
            background-color: #3264fe;
            pointer-events: auto;
          }
          input[type="range"]:active::-webkit-slider-thumb {
            background-color: #ffffff;
            border: 3px solid #3264fe;
          }
        }
      }
      .min__max {
        label {
          color: #545454;
        }
        input {
          background-color: #fafafa;
          &::placeholder {
            color: #9da1a7;
          }
        }
        .btn {
          color: #4a3e4c;
        }
      }

      // style rating

      .rating {
        display: flex;
        align-items: center;
        label {
          padding-top: 0;
          padding-bottom: 3px;
          font-size: 23px;
          padding-left: 10px;
        }
      }
      .five_fill {
        svg {
          color: #ff9017;
        }
      }
      .four_fill {
        color: #ff9017;
        svg:last-child {
          color: #d4cdc5;
        }
      }
      .three_fill {
        color: #ff9017;
        svg:last-child,
        svg:nth-child(4) {
          color: #d4cdc5;
        }
      }
      .two_fill {
        color: #ff9017;
        svg:last-child,
        svg:nth-child(3),
        svg:nth-child(4) {
          color: #d4cdc5;
        }
      }
    }
  }
`;
