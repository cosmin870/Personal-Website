import React from "react";
import "./Scroll.css";

const Scroll = () => {
  return (
    <div className="scroll-parent fade-in-1">
      <div className="scroll-down-container">
        <div className="scroll-ball"></div>
      </div>
      <span id="scroll-content">See more</span>
    </div>
  );
};

export default Scroll;
