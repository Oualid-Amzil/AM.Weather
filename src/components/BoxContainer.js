import React from "react";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import "./BoxContainer.css";

const BoxContainer = () => {
  return (
    <div className="boxcontainer">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default BoxContainer;
