import styled from "styled-components";

export const StyleShCart = styled.div`
  min-height: 100vh;
  padding-top: 4.3rem;
  .head_page {
    background-color: RGBA(74, 62, 76, 0.1);
    .container {
      padding: 2rem 0;
    }
  }
  .list_prods {
    padding-left: 0;
    padding-right: 1rem;
  }
  .free_deliv {
    h5 {
      color: #00b517;
    }
    p {
      color: #545454;
    }
  }
  .coupon {
    input {
      background-color: #fafafa;
      &:focus {
        box-shadow: none;
        border-color: #4a3e4c;
      }
      &::placeholder {
        color: #a0a4aa;
      }
    }
    button {
      border-color: #dee2e6;
      &:hover {
        background-color: #4a3e4c;
        color: #fff;
      }
    }
  }
  .side_info_price {
    li {
      color: #545454;
      font-size: 19px;
    }
    .val_discount {
      color: #fa3434;
    }
    .val_tax {
      color: #00b517;
    }
  }
  .checkOut-btn {
    .btn {
      background-color: #4a3e4c;
      color: #fff;
    }
  }
  .route_to_shpop {
    .btn {
      color: #4a3e4c;
    }
  }

  .bg_section {
    background-color: #f7f7f7;
  }
`;
