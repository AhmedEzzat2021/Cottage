import styled from "styled-components";

export const TitleDiv = styled.div`
  .cust_text {
    color: #c57ed1;
  }
  .btn_sellAll {
    color: #4a3e4c;
    font-size: 20px;
  }
  .subtitle {
    color: #4a3e4c;
    font-size: 27px;
  }
  svg {
    margin-left: 10px;
  }
  .main_h {
    font-size: 41px;
    color: #4a3e4c;
  }
  @media (max-width: 767px) {
    .main_h {
      font-size: 21px;
    }
    .subtitle {
      font-size: 18px;
    }
  }
`;
