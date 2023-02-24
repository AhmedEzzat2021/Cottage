import styled from "styled-components";

export const Menu = styled.div`
  .list-group {
    .item_list {
      padding: 10px;
      svg {
        color: #9da1a7;
        font-size: 25px;
        margin-right: 15px;
      }
      .txt_list {
        color: #545454;
      }
    }
    .active {
      svg {
        color: #4a3e4c;
      }
      .txt_list {
        color: #4a3e4c;
        font-size: 16px;
      }
    }
  }
`;
