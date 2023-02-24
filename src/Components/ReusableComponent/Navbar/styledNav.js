import styled from "styled-components";
export const Navbar = styled.nav`
  background-color: #605363;
  z-index: 99;
  padding: 10px;
  .sideMenu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: all 0.3s;
    background-color: #403542;
    width: 320px;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 999;
    padding: 30px 10px;
    border-right: 2px solid #c57ed1;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
      background-color: #5d4960;
      border-radius: 30px;
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c57ed1;
      border-radius: 50px;
    }
  }
  .open--sidemenu {
    transform: translateX(0%);
  }

  .backdrop_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
    visibility: hidden;
    z-index: 2;
    opacity: 0;
  }
  .backdrop_overlay--open {
    visibility: visible;
    opacity: 1;
  }

  .logo__menu {
    @media (max-width: 991px) {
      justify-content: space-between !important;
      margin-bottom: 10px;
    }
  }

  .menu {
    cursor: pointer;
    color: #fff;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    svg {
      font-size: 30px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .dropdown {
    .btn {
      color: #c57ed1 !important;
      position: relative;
      background-color: transparent;
      color: #000;
      border: none;
      padding: 5px;
      &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 50%;
        background-color: #c57ed1;
      }
    }
    .dropdown-toggle::after {
      display: none;
    }
  }

  .login_user {
    color: #fff;
  }
  .lang_nav {
    outline: none;
    background-color: transparent;
    color: #fff;
    border: none;
    border-right: 1px solid #fff;
    padding-right: 10px;
    margin-right: -10px;
  }
  .cart_nav {
    position: relative;
    img {
      height: 2rem;
    }
    .num_in_cart {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  }
  @media (max-width: 1199px) {
    .container {
      max-width: 100%;
    }
  }
  @media (max-width: 991px) {
    .L_cont {
      justify-content: space-between !important;
    }
    .lang_nav {
      border: none;
    }
  }
`;
