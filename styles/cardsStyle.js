import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
    /* 1 */

    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 28px;
  }
  .bor-right {
    border-right: 2px solid #e8e8e8;
  }
`;

export default CardStyle;
