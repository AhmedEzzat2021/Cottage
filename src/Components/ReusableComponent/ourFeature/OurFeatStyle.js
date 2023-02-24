import styled from "styled-components";

export const FeatStyle = styled.div`
  .our_feature {
    .row {
      .cont_box {
        display: grid;
        grid-template-columns: 50px auto;
        align-items: center;
        justify-content: center;
        @media (max-width: 767px) {
          margin-bottom: 20px;
          justify-content: flex-start;
        }
        .txt_our {
          .title {
            color: #1c1c1c;
            font-size: 21px;
          }
          .subTitle {
            color: #545454;
            font-size: 19px;
          }
        }
        @media (max-width: 1200px) {
          .txt_our {
            .title {
              font-size: 18px;
            }
            .subTitle {
              font-size: 16px;
            }
          }
        }
        @media (max-width: 767px) {
          .txt_our {
            .title {
              font-size: 21px;
            }
            .subTitle {
              font-size: 19px;
            }
          }
        }
      }
    }
    p {
      color: #4a3e4c;
    }
  }
`;
