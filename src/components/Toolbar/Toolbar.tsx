import React, { FC } from "react";
import { Link } from "react-router-dom";
import Tools from "./../Tools/Tools";

import "./toolbar.css";

const Navbar: FC = () => {
  return (
    <header>
      <div className="container">
        <Tools />
      </div>
    </header>
  );
};

export default Navbar;
