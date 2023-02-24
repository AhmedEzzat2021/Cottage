import styled from "styled-components";

export const CardProdStyle = styled.div`
  .card {
    margin: 0;
    padding: 0;
    border: none;
    position: relative;
    @media (max-width: 991px) {
      max-width: 100% !important;
      .img_top {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
        padding: 10px;
        height: 15rem;
        border-radius: 10px;
        img {
          max-width: 180px;
        }
      }
    }
    .img_top {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f6f6f6;
      padding: 10px;
      height: 15rem;
      border-radius: 10px;
      img {
        width: 80%;
      }
    }
  }

  .title_sections {
    margin-bottom: 15px !important;
  }
  .card {
    position: relative;
    padding: 0;
  }
  .price {
    color: #000000;
  }
  .descrp {
    color: #545454;
    margin-bottom: 10px;
    width: 200px;
    display: inline-block;
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
  .offer_,
  .padg_new {
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 13px;
    padding: 3px 20px;
  }
  .padg_new {
    background-color: #e5f7e7;
    color: #00b517;
  }
  .offer_ {
    background-color: #feeaea;
    color: #fa3434;
  }
  .card {
    box-shadow: none;
    position: relative;
    margin-bottom: 2rem;
    img {
      background-color: #f7f7f7;
      border-radius: 10px;
    }
    @media (max-width: 991px) {
      max-width: 18rem !important;
    }
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
      color: #4a3e4c;
    }
  }

  .par_card {
    @media (max-width: 991px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
