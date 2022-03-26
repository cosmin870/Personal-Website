import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

import pic from "../../images/pic.png";

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="title--container">
        <ul className="title--ul">
          <li>Bringing</li>
          <li>Your</li>
          <li>Ideas</li>
          <li>To</li>
          <li>Life.</li>
        </ul>
        <img src={pic} alt="main image" className="main--img" />
      </div>
    </header>
  );
};

export default Header;
