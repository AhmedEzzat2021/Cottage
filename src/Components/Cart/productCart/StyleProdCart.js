import styled from "styled-components";

export const StyleProd = styled.li`
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    text-align: center;
  }
  .inf_prod {
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center !important;
    }
  }
  .image_prod {
    width: 100px;
    img {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 200px;
    }
  }
  .txt_product {
    width: 15rem;
    word-break: break-all;
    .title_ {
      color: #545454;
    }
    .info {
      color: #9aa2b1;
    }
  }
  .qty {
    .form-select {
      background-color: #fafafa;
      color: #a5a8ae;
      width: 5rem;
    }
    .info_price {
      white-space: pre;
      .per_item {
        color: #9aa2b1;
        font-size: 14px;
      }
    }
  }

  .fav_delet {
    .btn_fav,
    .remove_ {
      border: 1px solid #e0e0e0;
      font-size: 20px;
    }
    .remove_ {
      font-size: 18px;
      color: #fa3434;
    }
  }
`;
