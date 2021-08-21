import {
  faClipboard,
  faFileVideo,
  faPhotoVideo,
  faPodcast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fade } from "react-awesome-reveal";
import CardsContainerWrapper from "./CardsContainerWrapper";

const CardsContainer = () => {
  return (
    <CardsContainerWrapper>
      <h1>Cards</h1>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <Fade className="p-4 shadow cards card1 mb-4">
            <div>
              <FontAwesomeIcon icon={faUsers} className="mb-3 icons" />
              <h2>Users</h2>
            </div>
          </Fade>
        </div>
        <div className="col-sm-6 col-md-3">
          <Fade className="p-4 shadow cards card2 mb-4">
            <div>
              <FontAwesomeIcon icon={faClipboard} className="mb-3 icons" />
              <h2>Todos</h2>
            </div>
          </Fade>
        </div>
        <div className="col-sm-6 col-md-3">
          <Fade className="p-4 shadow cards card3 mb-4">
            <div>
              <FontAwesomeIcon icon={faFileVideo} className="mb-3 icons" />
              <h2>Albums</h2>
            </div>
          </Fade>
        </div>
        <div className="col-sm-6 col-md-3">
          <Fade className="p-4 shadow cards card4 mb-4">
            <div>
              <FontAwesomeIcon icon={faPhotoVideo} className="mb-3 icons" />
              <h2>Photos</h2>
            </div>
          </Fade>
        </div>
        <div className="col-sm-6 col-md-3">
          <Fade className="p-4 shadow cards card5 mb-4">
            <div>
              <FontAwesomeIcon icon={faPodcast} className="mb-3 icons" />
              <h2>Posts</h2>
            </div>
          </Fade>
        </div>
      </div>
    </CardsContainerWrapper>
  );
};

export default CardsContainer;
