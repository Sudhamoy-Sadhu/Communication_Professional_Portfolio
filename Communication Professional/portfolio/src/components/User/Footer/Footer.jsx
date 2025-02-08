import {React,useState} from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactMeModal from "../ContactMe/ContactMeModal";
function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className="footermain">
                <div className="footertop">
                    <div className="leftF">
                        <img className="profile-pic-footer"></img>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore quidem molestiae est ab facilis</span>
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
                                <a href="https://www.linkedin.com/in/shreya-mukherjee-9a1829142/" target="blank"><FaLinkedinIn /></a>
                                <a href=""><FaWordpress/></a>
                                <a href=""><FaXTwitter/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerbottom">
                    <p>&copy; 2025 My Company. All rights reserved.</p>
                </div>
            </div>
            {modalOpen && <ContactMeModal onClose={() => setModalOpen(false)} />}
        </>
    )

}
export default Footer;