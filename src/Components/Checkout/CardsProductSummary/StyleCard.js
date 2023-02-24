import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 2rem 0;
  .img_card {
    img {
      height: 5rem;
    }
  }
  .price {
    font-weight: 700;
    color: #50b83c;
    padding-right: 15px;
  }
  .count_prod {
    color: #9aa2b1;
  }
  .ico_delete {
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcebe7;
    color: #de3618;
    /* font-size: 18px; */
    border-radius: 5px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #e8eaed;
  }
`;
//#50b83c green
//#9aa2b1 word

//#FCEBE7 light red
//#DE3618 deep red
