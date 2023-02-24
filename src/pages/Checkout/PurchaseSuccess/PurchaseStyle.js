import styled from "styled-components";

export const StylePursh = styled.div`
  min-height: 100vh;
  padding-top: 10rem;
  .b_light_icon {
    background-color: #eef0f9;
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    .cont_icon {
      position: relative;
      background-color: #47c1bf;
      color: #47c1bf;
      width: 5rem;
      height: 5rem;
      margin: 0 auto;
      font-size: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      z-index: 2;
      border: 4px solid #5c6ac4;
      &::before {
        content: "";
        position: absolute;
        right: 5px;
        bottom: 5px;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #fff;
        z-index: -1;
      }
    }
  }
  .txt_pursh {
    .num_order {
      color: #000;
    }
    color: gray;
  }
  .routes_pursh {
    .b_t_shop {
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      font-weight: 500;
      display: flex;
      font-weight: 500;
      justify-content: center;
      align-items: center;
      a {
        color: #5c6ac4;
      }
      svg {
        color: #5c6ac4;
        margin-right: 5px;
      }
    }
    .track_order {
      background-color: #4a3e4c;
      a {
        color: #fff;
      }
      img {
        color: #5c6ac4;
        margin-right: 10px;
      }
    }
  }
  .our_feature {
    padding-top: 8rem !important;
    padding-bottom: 5rem !important;
  }
`;
//#47C1BF background icon
