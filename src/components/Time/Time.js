import React, { useEffect, useState } from "react";
import "./jss/table.css";
import Register from "../Register/Register";

const Time = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <Register setValue={setValue} value={value} />
    </div>
  );
};

export default React.memo(Time);
