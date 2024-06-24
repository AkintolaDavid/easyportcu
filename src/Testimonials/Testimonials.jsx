import React from "react";
import "./Testimonials.css";
import testimg from "../asset/photo_2024-06-20_11-27-56.jpg";
import { Contactme } from "../Contactme/Contactme";
export const Testimonials = () => {
  return (
    <>
      <div id="testimonial" className="test_container">
        <div className="test_text">Testimonials</div>
        <div className="">
          <img src={testimg} className="test_img" />
        </div>
        <div className="test_desc">
          <span>
            {" "}
            "A student from Covenant University studying building technology 500
            level. I am into web design for maintenance effectiveness globally.
            worked for over 3 construction companies."
          </span>{" "}
        </div>
        <div className="test_name">Ebuka David Ibeh</div>
      </div>

      <Contactme />
    </>
  );
};
