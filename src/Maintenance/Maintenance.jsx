import React from "react";
import "./Maintenance.css";
import elect from "../asset/elect.png";
import general from "../asset/general.png";
import mech from "../asset/mech.jpg";
import { Teams } from "../Teams/Teams";
export const Maintenance = () => {
  return (
    <>
      <div className="maintenance_container">
        <div className="maintenance_text">
          <span className="maintenance_text_header">Maintenance Services</span>
          <span className="maintenance_text_subheader">
            In order for us to help uyou grow your buisness our carefully
            selected experts will provide advise in the following areas:{" "}
          </span>
        </div>
        <div className="areas">
          <div className="electrical">
            <img src={elect} className="area_img" />
            <h2>Electrical services</h2>
            <span>
              we understand the critical role electrical systems play in your
              construction project. Our team of licensed electricians provides
              comprehensive electrical services, from new installations and
              upgrades to troubleshooting and repairs. Whether you're building a
              new office complex, renovating a residential property, or simply
              require routine maintenance.
            </span>
          </div>
          <div className="mechanical">
            <img src={mech} className="area_img" />
            <h2>Mechanical services</h2>
            <span>
              we specialize in comprehensive mechanical services, ensuring your
              construction project achieves optimal functionality and comfort.
              We understand the complex interplay between various mechanical
              systems and take a holistic approach to design, installation, and
              maintenance. We work closely with your architects, engineers, and
              other construction professionals to ensure seamless integration of
              mechanical systems into your overall project design.
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
