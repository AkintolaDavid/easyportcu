import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { navItems } from "./NavItems";
// import { Testimonials } from "./Testimonials/Testimonials";
import Dropdown from "./Dropdown";

function Navbar({ teamsRef }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          Mcivistruct
        </Link>
        <ul className="nav-items">
          <li>
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("home").offsetTop,
                })
              }
            >
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("service").offsetTop,
                })
              }
            >
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("team").offsetTop,
                })
              }
            >
              <a>Team</a>
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("testimonial").offsetTop,
                })
              }
            >
              <a>Testimonial</a>
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("contact").offsetTop,
                })
              }
            >
              <a> Contact Us</a>
            </Link>
          </li>
        </ul>
        {/* <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link
                    onClick={() => {
                      if (teamsRef.current) {
                        // Smooth scroll to the "Teams" section using the ref
                        teamsRef.current.scrollIntoView({ behavior: "smooth" });
                      } else {
                        console.error("Teams element not found"); // Handle potential errors
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul> */}
      </div>
    </>
  );
}

export default Navbar;
