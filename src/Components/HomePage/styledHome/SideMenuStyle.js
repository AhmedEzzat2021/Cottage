import styled from "styled-components";

export const SideMenu = styled.div`
  width: 100%;
  .img_logo {
    width: 170px;
    margin-bottom: 4rem;
  }
  #list-croll {
    height: 250px;
    overflow-y: scroll;
  }
  #list-croll::-webkit-scrollbar-track {
    background-color: #5d4960;
    border-radius: 30px;
  }
  #list-croll::-webkit-scrollbar {
    width: 8px;
  }
  #list-croll::-webkit-scrollbar-thumb {
    background-color: #4a3e4c;
    border-radius: 50px;
  }
  .list__ {
    margin-bottom: 3rem;
    .title_list {
      font-size: 22px;
      color: #c57ed1;
      padding-bottom: 1rem;
    }
    .item_list {
      margin-bottom: 5px;
      a {
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .btn {
    background: none;
    color: #fff;
    padding-left: 0;
    font-size: 18px;
    img {
      padding-right: 8px;
    }
  }
`;
