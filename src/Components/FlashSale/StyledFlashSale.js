import styled from "styled-components";

export const FlashSaleStyle = styled.div`
  .title_flashSale {
    background-color: #eaeaea;
    padding: 10px;
    color: #4a3e4c;
  }
  .price_desc {
    .discount {
      padding-right: 5px;
      text-decoration: line-through;
      color: #4a3e4c;
    }
    .price {
      color: #cca680;
    }
    .text_size {
      .descrp {
        color: #4a3e4c;
        font-size: 15px;
      }
      .sizes {
        color: #9da1a7;
      }
    }
  }
  .iconFav {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 22px;
    border: 1px solid #e0e0e0;
    svg {
      color: #0d6efd;
    }
  }

  .par_card {
    @media (max-width: 991px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .card {
    box-shadow: none;
    position: relative;
    img {
      background-color: #f7f7f7;
      border-radius: 10px;
    }
    @media (max-width: 991px) {
      max-width: 18rem !important;
    }
  }
`;
