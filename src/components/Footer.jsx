import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
    return (
        <footer id="footer" className="footer-section">

            <h3>Let's Connect!</h3>
            <p>Have a project in mind or an opportunity to collaborate? Feel free to react out.</p>

            <div className="contact-links">
                <a href="https://github.com/Leeeeei28" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="#" target="_blank" rel="noreferrer"><CiLinkedin /></a>
                <a href="mailto:condradanish@gmail.com"><MdOutlineMail /></a>
            </div>

            <hr />

            <div className="arrow-up">
                <p>&copy; 2026 Your Name. All rights reserved.</p>
                <a href="home">Back to top &uarr;</a>
            </div>

        </footer>
    );
}

export default Footer;