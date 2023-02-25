import styled from "styled-components";

export const ItemStyle = styled.li`
  .text_cart {
    .color_brand {
      color: #9aa2b1;
      font-size: 13px;
    }
  }
  .count_p_price {
    color: #9aa2b1;
    font-size: 14px;
  }
  .total_amount {
    color: #50b83c;
  }
  .ico_edit {
    background-color: #f4f6f8;
    height: 2.2rem;
    width: 2.2rem;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
    border-bottom: 1px solid #9aa2b1;
    padding-bottom: 15px;
  }
`;
