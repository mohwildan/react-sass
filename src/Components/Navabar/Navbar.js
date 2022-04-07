import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./Navbar-data";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const open = () => setClick(!click);
  const closeMoble = () => setClick(false);

  return (
    <header>
      <Link to="/" className="logo">
        ManTul <span>.</span>
      </Link>
      <nav className={click ? "active" : ""}>
        {NavbarData.map((value, index) => {
          return (
            <Link onClick={closeMoble} key={index} to={value.to}>
              {value.title}
            </Link>
          );
        })}
      </nav>
      <div id="btn" onClick={open}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className="sing">
        <Link to="/sing-up">Sing Up</Link>
        <Link className="sing-btn" to="/sing-in">
          Sing In
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
