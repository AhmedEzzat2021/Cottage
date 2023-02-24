import styled from "styled-components";

export const Profile = styled.div`
  .txt_user {
    .email {
      color: #545454;
    }
    .num_phone {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 7px;
        height: 7px;
        background-color: #e0e0e0;
        left: -15px;
        top: 50%;
        transform: translateY(-30%);
        border-radius: 50%;
      }
    }
  }
`;
