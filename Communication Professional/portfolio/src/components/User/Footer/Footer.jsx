import {React,useState} from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import ContactMeModal from "../ContactMe/ContactMeModal";
function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className="footermain">
                <div className="footertop">
                    <div className="leftF">
                        <img className="profile-pic-footer"></img>
                        <span>A media professional with 5+ years of experience in writing, editing, and publishing content across print and digital platforms.</span>
                    </div>
                    <div className="rightF">
                        <div className="footer-menu">
                            <a href="/">Home</a>
                            <a href="/resume">Resume</a>
                            <a onClick={() => setModalOpen(true)}>Contact Me</a>
                        </div>
                        <div className="footer-social-links">
                            <p>Social</p>
                            <div className="link-logos">
                                <a className="same-same" href="https://www.linkedin.com/in/shreya-mukherjee-9a1829142/" target="blank"><FaLinkedinIn /></a>
                                <a className="same-same" href="https://wordpress.com/view/shreyamwrites.wordpress.com" target="blank"><FaWordpress/></a>
                                <a className="same-same" href="https://www.naukri.com/mnjuser/profile" target="blank"><img className="naukri-png" src="../assets/naukri.png" alt="NaukriLogo"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerbottom">
                    <p>&copy; 2025 Shreya Mukherjee. All rights reserved.</p>
                </div>
            </div>
            {modalOpen && <ContactMeModal onClose={() => setModalOpen(false)} />}
        </>
    )

}
export default Footer;