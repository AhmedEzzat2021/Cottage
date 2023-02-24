import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #4a3e4c;
  color: #fff;
  padding: 4rem 0 0;
  position: relative;

  .backGTriangle {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 22rem;
  }
  .text_foot {
    padding-right: 10rem;
    font-weight: 500;
    font-size: 14px;
  }

  li {
    font-weight: 500;
  }
  .padd__ {
    padding-bottom: 5rem;
  }
  .downloadApps {
    .box__app {
      background-color: #fff;
      color: #4a3e4c;
      gap: 5px;
      padding: 5px 18px;
      img {
        width: 25px;
      }
      .text_app {
        display: flex;
        flex-direction: column;
        span {
          font-size: 10px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 20px;
    }
  }
  .foot_categories {
    h3 {
      font-size: 20px;
    }
    li {
      margin-bottom: 5px;
      font-weight: 400;
    }
  }
`;
export const CopyRightSTY = styled.div`
  background-color: #4a3e4c;
  border-top: 1px solid #77687a;
  color: #fff;
  .container {
    @media (max-width: 787px) {
      display: flex;
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
  .SocialMasa {
    background-color: #eff8ff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    padding: 6px;
    cursor: pointer;
  }
  .copyRight {
    color: #fff;
  }
  .faceB {
    color: #3b5998;
  }
  .twitt {
    color: #1da1f2;
  }
  .linked {
    color: #0a66c2;
  }
  .instag {
    color: #c32aa3;
  }
`;
//#0a66c2
