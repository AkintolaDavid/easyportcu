import React from "react";
import "./Maintenance.css";
import civil from "../asset/civil.png";
import general from "../asset/general.png";
import structure from "../asset/structure.jpg";
import { Teams } from "../Teams/Teams";
import { useRef } from "react";

export const Maintenance = () => {
  return (
    <>
      <div id="service" className="maintenance_container">
        <div className="maintenance_text">
          <span className="maintenance_text_header">Maintenance Services</span>
          <span className="maintenance_text_subheader">
            In order for us to help uyou grow your buisness our carefully
            selected experts will provide advise in the following areas:{" "}
          </span>
        </div>
        <div className="areas">
          <div className="electrical">
            <img src={civil} className="area_img" />
            <h2>Civil services</h2>
            <span>
              We meticulously design and implement robust drainage systems,
              grading plans, and foundation systems. This ensures your structure
              stands on a stable and well-prepared base, ready to withstand the
              test of time. We also specialize in infrastructure planning,
              designing and implementing essential elements like roads, bridges,
              and utilities. Our focus goes beyond functionality, as we
              prioritize sustainable practices to ensure your project integrates
              seamlessly with the surrounding environment.
            </span>
          </div>
          <div className="mechanical">
            <img src={structure} className="area_img" />
            <h2>Structural services</h2>
            <span>
              With a team of experienced engineers who utilize cutting-edge
              software and industry knowledge to design load-bearing structures.
              These structures are meticulously analyzed to withstand a variety
              of forces, from wind and seismic activity to everyday use. We
              prioritize safety and efficiency, creating reliable structures
              that comply with all relevant building codes and regulations. Our
              approach emphasizes optimization, ensuring your structure
              possesses the strength it needs without unnecessary bulk. We work
              closely with architects and other stakeholders to guarantee
              seamless integration of our structural design into the overall
              project.
            </span>
          </div>
          <div className="general">
            <img src={general} className="area_img" />
            <h2>General services</h2>
            <span>
              We use high-quality materials and employ skilled technicians to
              guarantee the reliable operation of all mechanical systems.We
              prioritize energy-efficient technologies and practices, helping
              you save money on utility bills and reduce your environmental
              footprint.
            </span>
          </div>
        </div>
        <div className="latest">
          <div className="latest_head">Latest News</div>
          <div className="latest_p">
            If interested in the latest articles in the industry take a look at
            blog. You have nothing to lose!
          </div>
        </div>
      </div>
      <Teams />
    </>
  );
};
