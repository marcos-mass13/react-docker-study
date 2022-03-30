import { Button } from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import CustomTable from "../../core/CustomTable/CustomTable";
import "../../index.css";

const FunctionComponent = (props) => {
  const { setValue, value } = props;
  const date = new Date();
  const day = format(date, "dd");
  const time = format(date, "dd/MM/yy HH:mm:ss");

  const data = [];
  useEffect(() => {
    setValue(`${time} caso seja msm dia`);
    data.push({
      id: data.length,
      date: time,
      day: day,
      description: "entrou",
    });
  }, [value]);

  // const sendData = () => {
  //   setValue(data);
  // };

  return (
    <div>
      {/* {time}  */}
      <CustomTable data={value} />
    </div>
  );
};

export const Register = React.memo(FunctionComponent);
export default Register;
