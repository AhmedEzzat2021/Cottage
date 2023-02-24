import styled from "styled-components";
export const SignUpStyle = styled.div`
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

  // style form
  .btn-primary {
    background-color: #4a3e4c;
    border: none;
    &:hover {
      background-color: #605363;
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
  .eVkkSw {
    border: none;
  }
  .f-cnt {
    margin-bottom: 10px !important;
    padding: 2rem;
  }

  .dropdown-toggle {
    border: 1px solid #ced4da;
    color: gray;
  }
`;
