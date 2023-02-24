import styled from "styled-components";

export const AddressItem = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  .ico_loc {
    width: 50px;
    height: 50px;
    svg {
      color: #ffa54a;
      font-size: 2rem;
    }
  }
  .txt_addrs {
    color: #545454;
    max-width: 250px;
  }
  .primary_addrs {
    color: #9da1a7;
    font-size: 13px;
    padding-left: 1rem;
  }
  .btn_edit {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    svg {
      font-size: 20px;
      color: #9da1a7;
    }
  }
`;
