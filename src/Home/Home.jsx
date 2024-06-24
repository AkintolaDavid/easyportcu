import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { Maintenance } from "../Maintenance/Maintenance";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div id="home" className="container">
        <div className="madeeasy">Maintenance Made Easy</div>
        <div className="websitemain">
          This website main purpose is to make maintenance easy and available to
          the community of Sango Otta.
        </div>
        <div className="buttons">
          <button className="learnmore">Learn More</button>
          <button
            className="makerequest"
            onClick={() => {
              navigate("/loginpage");
            }}
          >
            SIGN UP NOW!!!
          </button>
        </div>
      </div>
      <Maintenance />
    </div>
  );
};
