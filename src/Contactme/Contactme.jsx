import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./Contactme.css";
export const Contactme = () => {
  const phoneNumber = "08069709910";
  const handlePhoneClick = () => {
    window.location.href = "tel:" + phoneNumber;
  };
  const email = "student@gmail.com";
  const address = "Covenant university, otta, Ogun state, Nigeria";

  const handleEmailClick = () => {
    window.location.href = "mailto:" + email;
  };

  const handleLocationClick = () => {
    window.location.href =
      "https://www.google.com/maps/search/" + encodeURIComponent(address);
  };
  return (
    <div id="contact" className="Contactme_main_container">
      <div className="conteactme_TextDiv">
        <span className="conteactme_Text">Contact Us</span>
      </div>
      <div className="contact_container">
        <div className="contactme_form">
          <div className="contact_name_subject">
            <input
              type="text"
              className="contactme_form_name"
              placeholder="Full Name(required)"
            />
            <input
              type="text"
              className="contactme_form_subject"
              placeholder="Subject"
            />
          </div>
          <div className="contact_phone_email">
            <input
              type="number"
              className="contactme_form_phoneNumber"
              placeholder="Phone Number(required)"
            />

            <input
              type="email"
              className="contactme_form_email"
              placeholder="Email Address"
            />
          </div>
          <textarea
            className="contactme_form_message"
            placeholder="Your Message"
          ></textarea>

          <button className="contactMe_btn">Send</button>
        </div>
      </div>
      <div className="contactme_details">
        <div className="contactme_phonenumber" onClick={handlePhoneClick}>
          <span>Customer support</span>
          <div>
            <FaPhoneAlt style={{ marginRight: "15px", fontSize: "25px" }} />{" "}
            {phoneNumber}
          </div>
          <div>
            <IoMdMail style={{ marginRight: "15px", fontSize: "25px" }} />{" "}
            {email}
          </div>
        </div>
        <div className="contactme_address" onClick={handleLocationClick}>
          <span>Address</span>
          <div>
            {" "}
            <FaLocationDot
              style={{ marginRight: "15px", fontSize: "25px" }}
            />{" "}
            {address}
          </div>
        </div>
        <div className="contactme_with" onClick={handleEmailClick}>
          <span>Reach us with:</span>
          <div className="contactme_with_options">
            <div>
              {" "}
              <FaInstagram />
            </div>
            <div>
              {" "}
              <FaLinkedinIn />
            </div>
            <div>
              {" "}
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* <IoMdMail style={{ marginRight: "15px", fontSize: "25px" }} /> {email} */}
      </div>
    </div>
  );
};
