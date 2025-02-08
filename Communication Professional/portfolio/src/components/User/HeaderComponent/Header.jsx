import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { FaLinkedinIn } from "react-icons/fa";
import ContactMeModal from "../ContactMe/ContactMeModal.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {

    if (location.pathname === "/") {
      setActiveButton("home");
    } else if (location.pathname === "/resume") {
      setActiveButton("resume");
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (buttonName) => {
    if (buttonName === "home") {
      nav("/");
    } else {
      nav("/resume");
    }
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="headerMain">
        <div className="buttonleft">
          <button
            className={`hr ${activeButton === "home" ? "isactive" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>
          <button
            className={`hr ${activeButton === "resume" ? "isactive" : ""}`}
            onClick={() => handleButtonClick("resume")}
          >
            Resume
          </button>
        </div>


        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>


        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <button
            className={`hr ${activeButton === "home" ? "isactive" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>
          <button
            className={`hr ${activeButton === "resume" ? "isactive" : ""}`}
            onClick={() => handleButtonClick("resume")}
          >
            Resume
          </button>
        </div>

        <div className="headercontent">
          <div className="mainImagediv">
            <img src="../assets/mainImg.jpg" className="mainImage" alt="Profile" />
          </div>


          {location.pathname === "/resume" && (
            <div className="professionalExperience">
              <h1>My Professional Experience</h1>
            </div>
          )}

          {(location.pathname === "/" || location.pathname === "/interviews" || location.pathname === "/articles") && (
            <div className="h1h3tags">
              <h1>Shreya Mukherjee</h1>
              <h3>Communications Professional</h3>
            </div>
          )}
        </div>

        <div className="buttonright">
          <a href="https://www.linkedin.com/in/shreya-mukherjee-9a1829142/" target="_blank" rel="noopener noreferrer">
            <button className="lc">
              <FaLinkedinIn />
            </button>
          </a>
          <button className="cus" onClick={() => setModalOpen(true)}>
            Contact Me
          </button>
        </div>
      </div>

      {modalOpen && <ContactMeModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default Header;
