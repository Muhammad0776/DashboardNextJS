import React from "react";
import { getPosts } from "../api";
import Dashboard from "../containers/Dashboard/Dashboard";

const Posts = (props) => {
  const { data } = props;

  return (
    <Dashboard menu={"posts"}>
      <h2>Posts</h2>
      <div>
        {data.map((v) => (
          <div className="shadow rounded d-flex mb-3 bg-white">
            <span className="me-3">{v.userId}</span>
            <p>{v.title}</p>
          </div>
        ))}
      </div>
    </Dashboard>
  );
};

export const getServerSideProps = async () => {
  const res = await getPosts();

  return {
    props: { data: res },
  };
};

export default Posts;
