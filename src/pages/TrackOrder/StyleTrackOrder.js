import styled from "styled-components";

export const TrackStyle = styled.div`
  min-height: 100vh;
  padding-top: 8rem;
  background-color: #f5f5f5;
  .list_icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      margin-left: 2rem;
      svg {
        font-size: 3rem;
      }
    }
  }
  .chat_seller {
    margin: 5rem auto 0;
    background-color: #4a3e4c;
    color: #fff;
    svg {
      font-size: 1.5rem;
      margin-right: 5px;
    }
  }
`;
