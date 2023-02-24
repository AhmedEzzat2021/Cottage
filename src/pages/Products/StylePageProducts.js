import styled from "styled-components";

export const ProductsStyled = styled.div`
  min-height: 100vh;
  .header_filter {
    .form-select {
      background-color: #fafafa;
      box-shadow: none;
    }
    .change_design_cards {
      .btn {
        display: flex;
        align-items: center;
        padding: 0;
        .cont_icon {
          display: inline-block;
          width: 2.2rem;
          height: 2.2rem;
          line-height: 2rem;
          font-size: 23px;
          color: #9da1a7;
        }
        .active_icon {
          background-color: #e0e0e0;
        }
      }
    }
  }

  .Products_in {
    padding: 20px 0;
    .title_sections {
      margin-bottom: 15px !important;
    }
  }
`;
