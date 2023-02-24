import styled from "styled-components";

export const ReviewStyle = styled.div`
  min-height: 100vh;
  padding-top: 8rem;
  background-color: #f5f5f5;
  .review_details {
    padding-left: 0;
    padding-right: 2rem;
    .sub_title {
      color: #9aa2b1;
    }

    .user_srvShipping {
      .image_profile {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .mob_num,
      .addrss {
        color: #9aa2b1;
      }
      .edit_btn {
        background-color: #f4f6f8;
      }
    }
    label {
      padding: 2rem 0 1rem;
    }
    .method_payment {
      h4 {
        margin-bottom: 0;
      }
      .change_meth {
        color: #5c6ac4;
      }
      .info_method {
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
        .edit_btn {
          background-color: #f4f6f8;
        }
        .image_cardPay {
          background-color: #f9fafb;
          width: 5rem;
          height: 2.2rem;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card_expiry {
          color: #9aa2b1;
        }
      }
    }
  }

  // style side summary
  .data_summary {
    padding-bottom: 1rem;
  }

  // style applied
  .applied {
    background-color: #f9fafb;
    .apply {
      padding: 10px;
      background-color: #50b83c;
      color: #fff;
      font-weight: 700;
    }
  }
  .line_ {
    margin-top: 2rem;
  }
  .line_not,
  .line_ {
    color: gray;
  }
  // style write note
  .note {
    .title {
      color: #959ead;
    }
    .form-control {
      resize: none;
      box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 20%);
      -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 20%);
      -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
      background-color: #f9fafb;
      &::placeholder {
        color: #9aa2b1;
        font-size: 14px;
      }
    }
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

//#9aa2b1 subtitle
// #F4F6F8 bg-buttons edit
// #5C6AC4 color change method
// #F9FAFB
