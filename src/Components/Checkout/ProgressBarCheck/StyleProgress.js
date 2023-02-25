import styled from "styled-components";

export const StyleProg = styled.div`
  .container {
    margin-bottom: 2rem;
    .cont_step {
      @media (max-width: 767px) {
        .step {
          margin-bottom: 10px;
        }
      }
      .step {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* margin: 0 1rem; */
        gap: 0.5rem;
        font-weight: 500;
      }
      .arrow_step {
        color: #a3a3a4;
        margin: 0 1rem;
      }
      .active_step {
        color: #5c6ac4;
      }
      .shiping_prog,
      .review_prog {
        .notActive_step {
          border-radius: 50%;
          background-color: #454f5b;
          color: #fff;
          width: 1.3rem;
          height: 1.3rem;
          background-color: #454f5b;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
        }
        P {
          color: #454f5b;
        }
      }

      .next_step {
        opacity: 0.4;
      }
    }
  }
`;
// #5c6ac4
// arrow color #A3A3A4
