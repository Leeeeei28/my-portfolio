import profile from "../assets/profile.jpg";
import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-description">
                <div className="hero-title">
                    <h1>Hi, <span className="my-name">I'm Bryle C. Condrada</span></h1>
                    <h2>Frontend Developer</h2>
                </div>

                <div className="hero-introduction">
                    <p className="intro">
                        I'm an aspiring Software Engineer currently focused on Frontend Development. 
                        I enjoy building responsive and user-friendly web applications using modern web technologies.
                    </p>
                    <p>
                        I'm continuously improving my skills and expanding my knowledge toward Full-Stack Development, 
                        with the goal of building complete and meaningful software solutions.
                    </p>

                    <div className="project-links">
                        <a href="#projects">View My Projects</a>
                        <a href="#" download>Download Resume</a>
                    </div>

                    <div className="contact-links">
                        <a href="https://github.com/Leeeeei28" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="#" target="_blank" rel="noreferrer"><CiLinkedin /></a>
                        <a href="mailto:condradanish@gmail.com"><MdOutlineMail /></a>
                    </div>
                </div>
            </div>

            <div className="hero-profile">
                <img src={profile} alt="profile" />
            </div>
        </section>
    );
}

export default Hero;