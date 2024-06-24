import React from "react";
import "./Teams.css";

import lecturer from "../asset/lecturer.jpg";
import studentimg from "../asset/photo_2024-06-20_11-27-56.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import { Testimonials } from "../Testimonials/Testimonials";
export const Teams = () => {
  return (
    <>
      <div className="teams_container">
        <div className="team_text">
          <div>Team</div>
          <span>
            Meet the people who are going to take your buisness to the next
            level
          </span>
        </div>
        <div className="team_profile">
          <div className="student">
            <img src={studentimg} className="test_img" alt="lect" />
            <div className="student_details">
              <span className="team_stu_name">Ebuka David Ibeh</span>
              <span className="team_stu_skill">Web designer</span>
              <span className="team_stu_info">
                Covenant University Undergraduate
              </span>
              <span className="team_stu_logo">
                <div>
                  {" "}
                  <FaXTwitter />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </span>
            </div>
          </div>
          <div className="lecturer">
            <img src={lecturer} className="test_img" alt="lect" />
            <div className="lecturer_details">
              <span className="team_lec_name">Lekan Amusan</span>

              <span className="team_lec_info">
                Professional builder and member of CORBON
              </span>
              <span className="team_stu_logo">
                <div>
                  {" "}
                  <FaFacebookF />
                </div>
                <div>
                  {" "}
                  <FaXTwitter />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="team_stats">
          <div className="team_project">
            <span className="team_stats_number">260</span>
            <span className="team_stats_word">PROJECTS</span>
          </div>
          <div className="slash"></div>
          <div className="team_clients">
            <span className="team_stats_number">120</span>
            <span className="team_stats_word">CLIENTS</span>
          </div>
          <div className="slash"></div>
          <div className="team_membership">
            <span className="team_stats_number">170</span>
            <span className="team_stats_word">MEMBERSHIP</span>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};
