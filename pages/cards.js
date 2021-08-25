import Dashboard from "../containers/Dashboard";
import CardStyle from "../styles/cardsStyle";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper/core";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

// install Swiper modules
SwiperCore.use([Scrollbar]);

const MySwiper = styled(Swiper)`
  width: 100%;
  .swiper-slide {
    padding: 0 15px;
    width: 100%;
    .payCard {
      width: 100%;
      height: 230px;
      border-radius: 20px;
      background-color: #123;
      overflow: hidden;
      padding: 15px;
      color: white;
    }
  }
  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    background: #1a7cbc;
    border-radius: 10px;
  }
  .swiper-scrollbar {
    opacity: 1 !important;
    background: #f1f1f1;
    border-radius: 14px;
    width: 450px;
    height: 11.47px;
    position: absolute;
    top: 210px;
  }
`;

const Users = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = useSelector((state) => state.cards);
  const card = cards[activeIndex];

  return (
    <CardStyle>
      <Dashboard menu={"cards"}>
        <h1>Cards</h1>
        <div class="row">
          <div className="col-md-6">
            <div className="shadow card p-3 mb-3">
              <p className="fw-bold">Cards</p>
              <div className="row">
                <div className="col-md-8 bor-right">
                  <MySwiper
                    scrollbar={{ hide: true }}
                    navigation={true}
                    updateOnWindowResize={true}
                    className="mySwiper"
                    onSlideChange={(e) => {
                      setActiveIndex(e.activeIndex);
                    }}
                  >
                    <SwiperSlide>
                      <div className="payCard">Card1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="payCard">Card2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="payCard">Card3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="payCard">Card4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="payCard">Card5</div>
                    </SwiperSlide>
                  </MySwiper>
                </div>
                <div className="col-md-4">
                  {/* <p className="text-end">Card: {activeIndex + 1}</p> */}
                  <div className="me-3">
                    <div className="text-end">
                      <div className="text-primary">
                        <b className="fs-4 me-2">$</b>
                        <span className="fs-1 fw-bold">
                          {card.currentBalance}
                        </span>
                      </div>
                      <p className="text-muted">Current balance </p>
                    </div>
                    <div className="text-end">
                      <div className="text-success">
                        <b className="fs-4 me-2">$</b>
                        <span className="fs-4">{card.income}</span>
                      </div>
                      <p className="text-muted">Income</p>
                    </div>
                    <div className="text-end">
                      <div className="text-danger">
                        <b className="fs-4 me-2">$</b>
                        <span className="fs-4">{card.outcome}</span>
                      </div>
                      <p className="text-muted">Outcome</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow rounded p-3 mb-3">
              <p className="fw-bold">Transaction history</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow rounded p-3 mb-3">
              <p className="fw-bold">Goals</p>
            </div>
            <div className="shadow rounded p-3 mb-3">
              <p className="fw-bold">Outcome Statistics</p>
            </div>
            <div className="shadow rounded p-3 mb-3">
              <p className="fw-bold">New transaction</p>
            </div>
          </div>
        </div>
      </Dashboard>
    </CardStyle>
  );
};

export default Users;
