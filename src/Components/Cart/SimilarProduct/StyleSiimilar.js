import styled from "styled-components";
export const Similar = styled.div`
  .title {
    font-size: 26px;
  }
  .image_prod {
    width: 105px;
    height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .txt_product {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .title_ {
      color: #545454;
    }
    .price {
      color: #1c1c1c;
    }
  }
`;
