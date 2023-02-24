import styled from "styled-components";

export const Bread = styled.div`
  margin-top: 4.3rem;
  background-color: RGBA(74, 62, 76, 0.2);
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
  }
  .breadcrumb-item {
    a {
      color: #c57ed1;
      font-size: 21px;
    }
  }
  .active {
    font-size: 21px;
    color: #9da1a7;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: ">";
    color: #c57ed1;
    font-size: 21px;
  }
`;
//#c57ed1
