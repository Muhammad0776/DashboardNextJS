import styled from "styled-components";

const CardsContainerWrapper = styled.div`
  .cards {
    padding: 30px;
    padding-bottom: 0;
    -webkit-box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    color: #fff;
  }

  .card1 {
    background-image: -webkit-linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
  }
  .card2 {
    background-image: -webkit-linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
  }
  .card3 {
    background-image: -webkit-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);
  }
  .card4 {
    background-image: -webkit-linear-gradient(90deg, #45b649 0%, #dce35b 100%);
  }
  .card5 {
    background-image: -webkit-linear-gradient(90deg, #435656 0%, #dd23 100%);
  }

  .icons {
    width: 60px;
    height: 60px;
  }
`;

export default CardsContainerWrapper;
