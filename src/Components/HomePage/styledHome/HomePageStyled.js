import styled from "styled-components";
import imageHeader from "../../../assets/Images/435-[Converted].png";
export const Header = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #4a3e4c;
  position: relative;
  border-bottom-left-radius: 7rem;
  border-bottom-right-radius: 7rem;
  background-image: url(${imageHeader});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  @media (max-width: 991px) {
    background-image: none;
  }

  .backTriangle {
    position: absolute;
    left: 5%;
    bottom: 0;
    transform: translateX(20%);
    z-index: 0;
    img {
      width: 300px;
    }
    @media (max-width: 991px) {
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 200px;
      }
    }
  }

  .cont_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12rem;
    padding-left: 5rem;
    h4 {
      font-size: 33px;
    }
    h2 {
      font-size: 53px;
    }
    @media (max-width: 991px) {
      justify-content: center;
      padding-top: 15rem;
      padding-left: 0;
      h4 {
        font-size: 22px;
      }
      h2 {
        font-size: 35px;
      }
    }
    .text {
      color: #fff;
      padding-right: 5rem;
      @media (max-width: 991px) {
        padding: 0;
      }
    }
  }
`;

export const FlashSleSection = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fff;
  .wave-up {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
  }

  .cont_box {
    background-color: #dcf0ff;
    border-radius: 15px;
    padding: 20px;
    gap: 15px;
    min-height: 7rem;
    font-weight: 600;
    display: grid;
    grid-template-columns: 80px auto;
    align-items: center;
    gap: 15px;
    font-weight: 400;
    img {
      background-color: #fff;
      color: #1c8eff;
      display: inline-block;
      border-radius: 15px;
      font-size: 20px;
      padding: 20px;
      width: 80px;
      height: 80px;
    }
  }
  .no1 {
    background-color: #dcf0ff !important;
    color: #5d819b !important;
  }
  .orag {
    background-color: #f9d5ff !important;
    color: #4a3e4c;
  }
  .blu {
    background-color: #ebf7db !important;
    color: #8fa56f;
  }
`;

export const LatestView = styled.div`
  position: relative;
  background-color: #f5f5f5;

  .wave-down {
    position: absolute;
    top: 1px;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
  }
`;

export const CategoryStyle = styled.div`
  background-color: #f5f5f5;
  padding-top: 8rem;
  margin-top: -5rem;
`;
