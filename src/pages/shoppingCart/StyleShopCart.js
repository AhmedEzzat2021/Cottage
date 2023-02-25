import styled from "styled-components";

export const StyleShCart = styled.div`
  min-height: 100vh;
  padding-top: 4.3rem;
  @media (max-width: 991px) {
    padding-top: 10rem;
  }
  .head_page {
    background-color: RGBA(74, 62, 76, 0.1);
    .container {
      padding: 2rem 0;
    }
  }
  .list_prods {
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
