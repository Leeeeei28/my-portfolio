import profile from "../assets/profile.jpg";
import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function Hero() {
    return (
        <section id="#home">
            <div className="hero-description">
                <h1>Hi, <span className="my-name">I'm Bryle C. Condrada</span></h1>
                <h2>Frontend Developer</h2>
                <p>
                    I'm an aspiring Software Engineer currently focused on Frontend Development. 
                    I enjoy building responsive and user-friendly web applications using modern web technologies.
                </p>
                <p>
                    I'm continuously improving my skills and expanding my knowledge toward Full-Stack Development, 
                    with the goal of building complete and meaningful software solutions.
                </p>

                <div className="project-links">
                    <a href="#">View My Projects</a>
                    <a href="#">Download Resume</a>
                </div>

                <div className="contact-links">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><CiLinkedin /></a>
                    <a href="#"><MdOutlineMail /></a>
                </div>
            </div>

            <div className="hero-profile">
                <img src={profile} alt="profile" />
            </div>
        </section>
    );
}

export default Hero;