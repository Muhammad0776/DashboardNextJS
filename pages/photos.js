import React from "react";
import { getPhotos } from "../api";
import Dashboard from "../containers/Dashboard/Dashboard";

const Photos = (props) => {
  const { data } = props;

  return (
    <Dashboard menu={"photos"}>
      <h2>Photos</h2>
      {data.map((v) => (
        <div className="row" key={v.to}>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card rounded mb-4">
              <img src={v.url} className="w-100" alt="not photo" />
              <div className="d-flex">
                <span>{v.albumId}.</span>
                <p>{v.id}</p>
                <p>{v.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Dashboard>
  );
};

export const getServerSideProps = async () => {
  const res = await getPhotos();

  return {
    props: { data: res },
  };
};

export default Photos;
