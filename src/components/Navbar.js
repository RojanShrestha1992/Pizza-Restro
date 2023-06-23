import React, { useState } from "react";
import Logo from "../assets/17378.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "boxicons";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          {" "}
          <img src={Logo} />{" "}
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <i class="bx bx-menu-alt-right"></i>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
