import React, { useRef, useEffect } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Scroller from "../Scroll-slider/Scroller";
import Services from "../Services/Services";
import pic from "../../images/pic.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const scrollRef = useRef(null);
  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", bounce: 0, duration: 1 },
      });
    }

    if (!inView) {
      animation.start({
        y: "-30%",
      });
    }
  }, [inView]);

  return (
    <header>
      <div className="main-container" ref={ref}>
        <Navbar />

        <div className="colored-bar"></div>

        <motion.div className="title--container" animate={animation}>
          <ul className="title--ul">
            <li className="fade-in-1">Bringing</li>
            <li className="fade-in-2">Your</li>
            <li className="fade-in-3">Ideas</li>
            <li className="fade-in-4">To</li>
            <li className="fade-in-5">Life.</li>
          </ul>

          <img
            src={pic}
            alt="main image"
            className="main--img fade-in-bottom "
          />
        </motion.div>

        <Scroller executeScroll={executeScroll} />
      </div>

      <Services scrollRef={scrollRef} />
    </header>
  );
};

export default Header;
