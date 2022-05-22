import React from "react";
import "./Services.css";

import laptop from "../../images/laptop.png";
import om from "../../images/om.png";
import codeIcon from "../../images/code.svg";
import webIcon from "../../images/domain.svg";
import transformIcon from "../../images/transform.svg";

const Services = (props) => {
  return (
    <div className="services" ref={props.scrollRef}>
      <div className="services-title-container">
        <div className="item-title" id="om-img-box">
          <img src={om} alt="human with laptop" className="om-img" />
        </div>

        <div className="item-title" id="title-box">
          <h1>My Services</h1>
        </div>

        <div className="item-title">
          <img src={laptop} alt="laptop" className="laptop-img" />
        </div>
      </div>

      <div className="main-services-container">
        <div className="left-service-container service-item">
          <h3>UI Design</h3>
          <p>
            Does seamless user interfaces and smooth navigations lure you for
            your next website project? Look no further!
          </p>
        </div>

        <div className="mid-service-container service-item">
          <h3>Front-End Development</h3>
          <p>
            The front-end of a website is the part that you see and interact
            with. I build and design frontend solutions for you with close
            attention to detail, using the React.js framework and other
            technologies, best practices, and up-to-date knowledge.
          </p>
        </div>

        <div className="right-service-container service-item">
          <h3>Responsive Web Design</h3>
          <p>
            I create flexible websites that look great in all sizes: from
            phones, tablets, and desktops.
          </p>
        </div>
      </div>

      <div className="specialities-container">
        <div className="spec-title-box">
          <h2>A Small List Of My Specialties</h2>
        </div>
        <div className="spec-list-box">
          <ul>
            <li>
              <div className="spec-list-child">
                <span>Website Maintenance</span>
                <img src={codeIcon} alt="code icon" />
              </div>
            </li>

            <li>
              <div className="spec-list-child">
                <span>Building Websites From Scratch</span>
                <img src={webIcon} alt="website icon" />
              </div>
            </li>

            <li>
              <div className="spec-list-child">
                <span>Rebuild And Redesign Your Old Website</span>
                <img src={transformIcon} alt="transform icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
