import styled from "styled-components";

export const StyleSeller = styled.div`
  min-height: 100vh;
  padding-top: 68px;
  .container {
    margin-bottom: 3rem;
  }
  .seller_info {
    margin-top: -100px;
    padding-left: 10rem;
  }

  .section_categories {
    padding: 20px 0;
    background-color: #f5f5f5;
  }
  .new_products {
    padding: 20px 0;
    .title_sections {
      margin-bottom: 15px !important;
    }
    .card {
      position: relative;
      box-shadow: var(--default-shadow-);
      padding: 0;
    }
    .price {
      color: #000000;
    }
    .descrp {
      color: #545454;
      margin-bottom: 10px;
    }
    .foot_card {
      margin-top: 10px;
      .iconFav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: RGBA(74, 62, 76, 0.1);
        color: #4a3e4c;
        font-size: 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      .btn {
        background-color: #4a3e4c;
        color: #fff;
      }
    }
  }

  .wyhy_us {
    background-color: #f5f5f5;
    padding: 20px 0 10px;
    .container {
      margin-bottom: 2rem;
    }
    .title_sections {
      margin-bottom: 30px !important;
    }
    .title {
      font-size: 19px;
    }
    .txt_b {
      color: #545454;
    }
    .icon_ {
      svg {
        background-color: #fff;
        display: inline-block;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        color: #4a3e4c;
        padding: 15px;
        box-shadow: var(--default-shadow-);
      }
    }
  }
  .latestItem {
    .title_ {
      padding-bottom: 20px !important;
    }
  }
`;
//#545454
