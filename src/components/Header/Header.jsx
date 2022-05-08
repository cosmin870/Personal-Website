import React, { useRef, useState, useEffect } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Scroll from "../Scroll-slider/Scroll";
import Services from "../Services/Services";
import pic from "../../images/pic.png";

const Header = () => {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <header>
      <Navbar />
      <div className="colored-bar"></div>

      <div className="title--container">
        <ul className="title--ul">
          <li className="fade-in-1">Bringing</li>
          <li className="fade-in-2">Your</li>
          <li className="fade-in-3">Ideas</li>
          <li className="fade-in-4">To</li>
          <li className="fade-in-5">Life.</li>
        </ul>
        <img src={pic} alt="main image" className="main--img fade-in-bottom " />
      </div>
      <Scroll executeScroll={executeScroll} />
      <Services scrollRef={scrollRef} />
    </header>
  );
};

export default Header;
