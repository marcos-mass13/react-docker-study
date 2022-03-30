import {
  Alert,
  AlertTitle,
  Tab,
  Table,
  TableBody,
  TableHead,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/table.css";
const FunctionComponent = (props) => {
  const { data } = props;

  const columns = [
    {field:'id',title:'id'},
    {field:'date',title:'date'},
    {field:'day',title:'day'},
    {field:'description',title:'description'}
  ]

  const datas =[
    {id:0,date:'20/03/22 03:20:00',day:20,description:"teste"},
    {id:0,date:'20/03/22 03:20:00',day:20,description:"teste"},
    {id:0,date:'20/03/22 03:20:00',day:20,description:"teste"},
    {id:0,date:'20/03/22 03:20:00',day:20,description:"teste"},
  ]
  return (
    <div>
      <Alert />
      <AlertTitle />

      <Table
       data={datas}
       columns={columns}
      />
      {/* <table className="table">
        <tr className="tr">
          <th className="th">id</th>
          <th className="th">date</th>
          <th className="th">day</th>
          <th className="th">description</th>
        </tr>
        {data.map((x) => (
          <tr className="tr">
            <td className="td">{x.id}</td>
            <td className="td">{x.date}</td>
            <td className="td">{x.day}</td>
            <td className="td">{x.description}</td>
          </tr>
        ))}
      </table> */}
    </div>
  );
};

export const CustomTable = React.memo(FunctionComponent);
export default CustomTable;