import styled from "styled-components";

export const SignInStyle = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay,
  .backimgForm {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0%;
    z-index: -1;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .overlay {
    background-color: RGBA(74, 62, 76, 0.8);
  }
  label {
    margin-bottom: 0;
  }
  ._or::before {
    content: "OR";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: gray;
    background-color: #fff;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 50%;
  }
  .btn-primary {
    background-color: #4a3e4c;
    border: none;
    &:hover {
      background-color: #605363;
    }
  }

  .btn_google {
    border: 1px solid #e8e8e8;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-check-input:checked {
    background-color: #4a3e4c;
    border-color: #4a3e4c;
  }
  .form-check-input:focus {
    box-shadow: 0 0 0 0.25rem RGBA(74, 62, 76, 0.25);
  }
  .btn_faceboK {
    background-color: #3b5998;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 25px;
    }
  }
  .form-check-input:checked {
    background-color: #4a3e4c;
    border-color: #4a3e4c;
  }
  .form-check-input:focus {
    box-shadow: 0 0 0 0.25rem RGBA(74, 62, 76, 0.25);
  }
  input:focus {
    box-shadow: 0 0 0 0.25rem RGBA(74, 62, 76, 0.25);
  }
  .form-control:focus {
    border-color: #4a3e4c;
  }
  .cont_head {
    color: #fff;
    @media (max-width: 991px) {
      color: #000;
      gap: 1rem !important;
      img {
        background-color: #605363;
        padding: 10px;
        border-radius: 20px;
        margin-bottom: 1rem;
      }
    }
  }
  .row {
    @media (max-width: 991px) {
      justify-content: space-between;
    }
  }
  .eVkkSw {
    border: none;
  }
  .f-cnt {
    margin-bottom: 10px !important;
  }
`;
//#E8E8E8
