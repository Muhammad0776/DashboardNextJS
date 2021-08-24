import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";
import { getUsers } from "../api";
import Dashboard from "../containers/Dashboard/Dashboard";

const Users = (props) => {
  const { data } = props;

  return (
    <Dashboard menu={"users"}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((v) => (
            <TableRow key={v.to}>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.username}</TableCell>
              <TableCell>{v.email}</TableCell>
              <TableCell>{v.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Dashboard>
  );
};

export const getServerSideProps = async () => {
  const res = await getUsers();

  return {
    props: { data: res },
  };
};

export default Users;
