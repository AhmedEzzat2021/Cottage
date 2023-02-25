import styled from "styled-components";

export const ServiceStyle = styled.div`
  .text_,
  .Currency {
    transition: 0.3s;
  }
  .ico_currn {
    transition: 0.3s;
    background-color: #637381;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #fff;
    font-size: 14px;
    margin-right: 9px;
    font-weight: 400;
  }
  .title_serv {
    margin-top: -5px;
    .sub_ {
      color: #9aa2b1;
    }
  }
  .disc {
    color: gray;
    font-size: 15px;
    font-weight: 300;
    margin-left: 5px;
  }
  .item_:first-child {
    img {
      width: 80px;
      background-color: #4a3e4c;
      @media (max-width: 767px) {
        width: 100px;
      }
    }
  }
  @media (max-width: 767px) {
    .item_ {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 10px;
    }
  }
`;
//#EDF8EB green light
//#50B83C grren big
