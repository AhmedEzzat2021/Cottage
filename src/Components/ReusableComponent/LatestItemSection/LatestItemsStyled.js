import styled from "styled-components";
export const LatestStyle = styled.div`
  margin-top: 0;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-bottom: 5rem;
  .wave-down {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
  }
  .big_img {
    @media (max-width: 991px) {
      margin-bottom: 15px;
    }
  }
  .small_img {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    img {
      width: 100%;
      height: 50%;
    }
  }
`;
// #adb6c0 opacity color
