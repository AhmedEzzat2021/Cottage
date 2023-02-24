import styled from "styled-components";

export const CardList = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(194, 195, 192, 1) 100%);
  .image_card {
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 7rem;
    }
  }
  .text_box {
    display: inline-block;
    width: 100%;
    padding: 20px;
    .f_ch {
      font-size: 18px;
    }
    span {
      color: #4a3e4c;
    }
    h5 {
      color: #4a3e4c;
      font-size: 24px;
    }
    .offer_disc {
      background-color: #4a3e4c;
      color: #fff;
      padding: 3px 15px;
      border-radius: 5px;
    }
    .disc_arrw {
      svg {
        background-color: #fff;
        color: #4a3e4c;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding: 5px;
      }
    }
  }
`;

// #adb6c0
// #fef3e7 orange bg
// #fec287 org color
// #0a2c4c color text
