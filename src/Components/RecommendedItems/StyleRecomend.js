import styled from "styled-components";

export const StyleCardRecom = styled.div`
  .card {
    position: relative;
    box-shadow: var(--default-shadow-) !important;
    padding: 10px;
    img {
      background: none !important;
    }
  }
  .card_conatin {
    background: none;
  }
  .text_price {
    padding-top: 0 !important;
    padding: 0 5px;
    .descrp {
      color: #545454;
      font-size: 15px;
    }
  }
  .iconFav {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 15px;
    top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: RGBA(74, 62, 76, 0.1);

    font-size: 25px;
    border-radius: 5px;
    cursor: pointer;
    svg {
      color: #4a3e4c;
    }
  }
  .heading {
    h4 {
      @media (max-width: 767px) {
        text-align: center;
      }
    }
  }
`;
