import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./Contactme.css";
export const Contactme = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users"); // Replace with actual route if created
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);
  const [formData, setFormData] = useState({
    formName: "",
    formSubject: "",
    formNumber: "",
    formEmail: "",
    formMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check if passwords match when changing confirmPassword field
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    const isEmptyField = Object.values(formData).some((value) => !value);
    if (isEmptyField) {
      alert("Please fill in all fields");
      return;
    }

    // Check if phone number is already in use
    // const existingUser = users.find(
    //   (user) => user.repnumber === formData.repnumber
    // );
    // if (existingUser) {
    //   alert("Phone number is already in use");
    //   return;
    // }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Signup successful, you can redirect the user or show a success message
      alert("Message successfully sent!");
      navigate("/");
    } else {
      // Signup failed, handle error

      console.log("Signup failed:", response.statusText);
    }
  };
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
        <form className="contactme_form" onSubmit={handleSubmit}>
          <div className="contact_name_subject">
            <input
              type="text"
              name="formName"
              value={formData.formName}
              onChange={handleChange}
              className="contactme_form_name"
              placeholder="Full Name(required)"
            />
            <input
              type="text"
              className="contactme_form_subject"
              name="formSubject"
              value={formData.formSubject}
              onChange={handleChange}
              placeholder="Subject"
            />
          </div>
          <div className="contact_phone_email">
            <input
              type="number"
              className="contactme_form_phoneNumber"
              name="formNumber"
              value={formData.formNumber}
              onChange={handleChange}
              placeholder="Phone Number(required)"
            />

            <input
              type="email"
              className="contactme_form_email"
              name="formEmail"
              value={formData.formEmail}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <textarea
            className="contactme_form_message"
            name="formMessage"
            value={formData.formMessage}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>

          <button className="contactMe_btn">Send</button>
        </form>
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
