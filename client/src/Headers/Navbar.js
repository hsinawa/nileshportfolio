import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import "./NavbarStyle.css";
import logo from "../Images/logo.jpeg";

function Navbar() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id='navtop' >
      {admin ? (
        <p>
          <a href="/admin">
            {" "}
            <img
              src={logo}
              alt="Concept2Education"
              style={{
                width: "70px",
              }}
            />{" "}
          </a>
        </p>
      ) : (
        <h3>
          <a href="/">
            {" "}
            <img
              src={logo}
              alt="Concept2Education"
              style={{
                width: "70px",
              }}
            />{" "}
          </a>
        </h3>
      )}
      <nav
        ref={navRef}
        id="nav-styles"
        style={{ float: "right", marginRight: "-33%" }}
      >
        <a href="/about" id="navbar-item">
          About Us
        </a>
        <a href="/products" id="navbar-item">
          Find Us
        </a>
        <a href="/products" id="navbar-item">
          Blogs
        </a>
        <a href="/contact" id="navbar-item">
          Contact Us
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
