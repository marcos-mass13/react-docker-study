import React, { useEffect, useState } from "react";
import "./css/NavBar.css";
const FunctionComponent = (props) => {
  const { data } = props;
  return (
    <div className="topNav">
      <a className="a active" href="#">
        Home
      </a>
      <a className="a active" href="#News">
        news
      </a>
      <a className="a active" href="#Contact">
        Contact
      </a>
      <a className="a active" href="#About">
        About
      </a>
    </div>
  );
};

export const NavBar = React.memo(FunctionComponent);
export default NavBar;
