import styled from "styled-components";

export const ProdDetails = styled.div`
  .img_brand {
    width: 100%;
    img {
      width: 295px;
    }
    @media (max-width: 991px) {
      justify-content: center !important;
    }
  }
  .title_Brand {
    font-size: 24px;
    @media (max-width: 991px) {
      width: 100% !important;
      text-align: center;
      padding-bottom: 1rem !important;
    }
  }
  .rate_brand {
    .stars_rate {
      // #E4E4E4 color hide stars
      // #FF9017 stars active
      margin-right: 1rem;
      .fill_st {
        color: #ff9017;
      }
      svg {
        color: #e4e4e4;
        font-size: 21px;
        margin-left: -5px;
      }
    }
    .num_rate {
      position: relative;
      color: #ff9017;
      font-size: 14px;
      padding-bottom: 5px;
    }
    .point {
      background-color: #e4e4e4;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .inStoke {
      color: #00a715;
      font-size: 14px;
    }
    @media (max-width: 991px) {
      justify-content: center !important;
    }
  }

  .price {
    .per_itm {
      color: #b2b5ba;
      font-size: 21px;
    }
    .price_num {
      font-size: 20px;
    }
    @media (max-width: 991px) {
      text-align: center;
      .per_itm {
        padding-right: 0 !important;
      }
    }
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 991px) {
      text-align: center;
      .per_itm {
        padding-right: 0 !important;
      }
    }
  }
  .info_product {
    .list {
      display: grid;
      grid-template-columns: 20% 80%;
    }
    .title_info {
      color: #b2b5ba;
    }
  }
  .count_size {
    button,
    select {
      height: 53px;
      border: 1px solid #e4e4e4;
    }
    .c_o_u_n {
      font-size: 23px;
    }
    .size_ {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-basis: 25%;
      @media (max-width: 991px) {
        flex-basis: 35%;
      }
      select {
        border: 1px solid #f3f3f3;
        padding: 8px 0;
        color: #9da1a7;
        background-color: #fafafa;
        outline: none;
        border-radius: 5px;
        .size_btn {
        }
      }
    }
    .Quantity_ {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-basis: 25%;
      @media (max-width: 991px) {
        flex-basis: 35%;
      }
      .inp_qty {
        border-radius: 5px;
        padding: 8px 10px;
        height: 53px;
        border: 1px solid #e4e4e4;

        button {
          background: none;
          border: none;
          outline: none;
          padding: 5px;
          color: #b2b5ba;
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
          }
        }
      }
    }
  }
  hr {
    color: #b2b5ba;
  }
  .list_colors {
    .tit_color {
      font-size: 21px;
      color: #545454;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    .item_color {
      width: 47px;
      height: 47px;
      background-color: #737ac0;
      border-radius: 50%;
    }
  }
  .footer__details {
    .btn {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 21px;
      img {
        width: 25px;
      }
    }
    .seller_as {
      background-color: #4a3e4c;
      color: #fff;
      gap: 10px;
    }
    .add_cart {
      background-color: #9dc778;
      color: #fff;
      gap: 10px;
    }
    .fav_io {
      border: 1px solid #e6e6e6;

      gap: 15px;
      color: #4a3e4c;
      font-size: 20px;
      svg {
        color: #766d78;
      }
    }
  }
`;
export const OverView = styled.div`
  background-color: #f7f7f7;
  .tabs_ {
    @media (max-width: 991px) {
      padding: 0 !important;
      justify-content: center !important;
    }
    .tab_li {
      min-height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      position: relative;
      @media (max-width: 991px) {
        padding: 0 !important;
      }
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 0%;
        height: 2px;
        background-color: #4a3e4c;
        transition: all 0.3s ease-out;
      }
    }
    .active_tab {
      opacity: 1;
      color: #4a3e4c;
      &.tab_li::before {
        width: 100%;
      }
    }
  }
  .container_content {
    .content_tabs {
      display: none;
    }
    .active_content {
      display: block;
    }
  }
`;
export const breadCartDetails = styled.div``;
