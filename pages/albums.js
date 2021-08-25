import React from "react";
import { getAlbums } from "../api";
import Dashboard from "../containers/Dashboard/Dashboard";

const Albums = (props) => {
  const { data } = props;

  return (
    <Dashboard menu={"albums"}>
      <h2>Albums</h2>
      {data.map((v) => (
        <div className="row" key={v.to}>
          <div className="col-12 col-sm-6 col-md-4 col-lg-6">
            <div className="card rounded d-flex mb-3">
              <div className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-warning">{v.id}</span>
                <p className="mb-0 text-muted">{v.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Dashboard>
  );
};

export const getServerSideProps = async () => {
  const res = await getAlbums();

  return {
    props: { data: res },
  };
};

export default Albums;
