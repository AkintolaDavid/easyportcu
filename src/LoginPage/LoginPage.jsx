import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/logo.jpg";
import "./LoginPage.css";

import { IoArrowBack } from "react-icons/io5";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1109);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1109);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const backhandler = () => {
    navigate("/");
  };
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
    companyName: "",
    companyAddress: "",
    repName: "",
    repNumber: "",
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
    //   (user) => user.repNumber === formData.repNumber
    // );
    // if (existingUser) {
    //   alert("Phone number is already in use");
    //   return;
    // }

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Signup successful, you can redirect the user or show a success message
      alert("User signed up successfully!");
      navigate("/");
    } else {
      // Signup failed, handle error

      console.log("Signup failed:", response.statusText);
    }
  };

  return (
    <>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="overrall_container">
          <div className="back_div">
            {" "}
            <IoArrowBack className="backarrow" onClick={backhandler} />
            <img src={logo} className="logo_img" />
            <div></div>
          </div>
          <div className="main_container">
            <div className="loginpage_container">
              <div className="signin_container">
                <span className="loginpage_signin">SIGN UP</span>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="loginpage_username">Company's name</span>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="enter company's name"
                      className="loginpage_password_input"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="loginpage_username">
                      Company's Address
                    </span>
                    <input
                      type="text"
                      name="companyAddress"
                      placeholder="enter company's address"
                      className="loginpage_password_input"
                      value={formData.companyAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="loginpage_username">
                      Company Representative's name
                    </span>
                    <input
                      type="text"
                      name="repName"
                      placeholder="enter representative's name"
                      className="loginpage_password_input"
                      value={formData.repName}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="loginpage_password">
                      Company Representative's phone number
                    </span>
                    <input
                      type="number"
                      name="repNumber"
                      placeholder="enter representative's number"
                      className="loginpage_password_input"
                      value={formData.repNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="submit_signin">SIGN UP</button>
                </form>
              </div>
              <div className="signup_container">
                <span className="welcome_to_itga">WELCOME TO Mcivistruct</span>
                <span className="new_to_itga">
                  Mcivistruct is where form meets structure, as we help build
                  tomorrow, today.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
// <div className="mobile_main_container">
//   <div className="mobile_itga">
//     <span className="welcome_itga">WELCOME TO OMRON</span>
//     <span className="itga_text">
//       Take the next step in ensuring your vitals
//     </span>
//     <span className="itga_text">are in check with Omron today</span>
//   </div>
//   <div style={{ display: "flex", flexDirection: "column" }}>
//     <span className="loginpage_username">PHONE NUMBER</span>
//     <input
//       type="text"
//       placeholder="phone number"
//       className="loginpage_password_input"
//       onChange={(e) => setPhoneNumber(e.target.value)}
//     />
//   </div>
//   <div style={{ display: "flex", flexDirection: "column" }}>
//     <span className="loginpage_password">PASSWORD</span>
//     <div className="loginpage_password_input">
//       <input
//         type={isPasswordVisible ? "text" : "password"}
//         placeholder="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <MdRemoveRedEye
//         onClick={togglePasswordVisibility}
//         style={{ fontSize: "20px" }}
//       />
//     </div>
//   </div>
//   <div className="submit_btn">
//     <button className="submit_signin" onClick={HandleSignup}>
//       SIGN IN
//     </button>
//   </div>
//   <div className="remember_forget">
//     <div className="remember">
//       <input type="checkbox" />
//       <span className="remember_text">Remember Me</span>
//     </div>
//     <Link className="forgot-password-link" to="/forgot-password">
//       Forgot Password?
//     </Link>
//   </div>
//   <div className="signin_with">
//     <span>Sign In with</span>
//     <div className="signin_with_options">
//       <div
//         className="signin_with_options_logo"
//         style={{ fontSize: "54px", cursor: "pointer" }}
//       >
//         <IoLogoApple />
//       </div>
//       <div
//         className="signin_with_options_logo"
//         style={{ fontSize: "45px", cursor: "pointer" }}
//       >
//         <FcGoogle />
//       </div>
//       <div
//         className="signin_with_options_logo"
//         style={{
//           fontSize: "40px",
//           cursor: "pointer",
//           color: "#1877F2",
//         }}
//       >
//         <FaFacebook />
//       </div>
//     </div>
//   </div>
//   <Link className="signup_link" to="/signup">
//     <div className="no_account">Don't have an account? Sign Up</div>
//   </Link>
// </div>
