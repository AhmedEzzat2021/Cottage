import styled from "styled-components";

export const OrderStyle = styled.div`
  border: 1px solid #4a3e4c;
  .id_date {
    .date_order {
      color: #9da1a7;
    }
    .state_order {
      color: #00b517;
    }
  }
  .action_order {
    .cancel_ord {
      border: 1px solid #e0e0e0;
    }

    .track_ord {
      background-color: #4a3e4c;
      color: #fff;
    }
  }
  .about_user {
    color: #545454;
    .title {
      color: #bdc1c8;
    }
    .address {
      max-width: 220px;
    }
    .num_credit {
      color: #00b517;
    }
  }
  .products_bought {
    .txt_product {
      .title_ {
        color: #545454;
      }
      .num_products_price {
        color: #1c1c1c;
      }
    }
  }
`;
