import styled from "styled-components";

export const StyleSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
  .input_group {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 20% 1fr;
    gap: 20px;
    border-radius: 10px;
    background-color: #ffff;
    @media (min-width: 1201px) {
      gap: 30px;
    }
    @media (max-width: 767px) {
      gap: 60px;
    }
    .inpp__ {
      position: relative;
      border-left: 1px solid #c57ed1;
      .form-control {
        box-shadow: none;
        border-radius: 0;
        border: none;
        position: relative;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
    .form-select {
      box-shadow: none;
      min-width: 100%;
      width: max-content;
      border-radius: 0;
      color: #c57ed1;
      border: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;
