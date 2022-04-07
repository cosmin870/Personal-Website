import { React, useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const navItems = ["HOME", "SERVICES", "CONTACT"];

  const displayNavItemsMobile = navItems.map((item) => (
    <span key={item} className="mobile-menu-elements">
      {item}
    </span>
  ));

  const displayNavItems = navItems.map((element) => (
    <li key={element}>{element}</li>
  ));

  return (
    <nav>
      <span id="logo">[CosmoWeb]</span>
      <ul id="nav--ul">{displayNavItems}</ul>

      {toggle ? (
        <FiMenu
          color="white"
          size={29}
          className="hamburger"
          onClick={handleToggle}
        />
      ) : (
        <AiOutlineClose
          color="white"
          size={29}
          onClick={handleToggle}
          className="hamburger flip-2-hor-top-1"
        />
      )}
      {!toggle ? (
        <div className="show-nav-elements scale-up-hor-left">
          {displayNavItemsMobile}
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
