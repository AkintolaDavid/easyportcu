import React from "react";
import "./Home.css";
import { Maintenance } from "../Maintenance/Maintenance";
export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="madeeasy">Maintenance Made Easy</div>
        <div className="websitemain">
          This website main purpose is to make maintenance easy and available to
          the community of Covenant University
        </div>
        <div className="buttons">
          <button className="learnmore">Learn More</button>
          <button className="makerequest">Make Request</button>
        </div>
      </div>
      <Maintenance />
    </div>
  );
};
