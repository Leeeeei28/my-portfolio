import "./About.css";
import profile from "../assets/profile.jpg";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

function About() {
    return (
        <section id="about" className="about-section">

            <div className="about-profile">
                <img src={profile} alt="profile" />
            </div>

            <div className="about-description">
                <h5>ABOUT ME</h5>
                <div className="about-title">
                    <h1>
                        Turning Ideas into <br />
                        <span className="about-title-highlight">
                            Digital Solutions
                        </span>
                    </h1>
                </div>

                <div className="about-introduction">
                    <p>
                        I'm an aspiring Software Engineer and a 
                        Bachelor of Science in Information 
                        Technology student with a strong interest in software development.
                    </p>
                    <p>
                        Currently, I'm focused on Frontend Development, 
                        building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. 
                        I enjoy learning how things work, solving problems, and turning ideas into practical digital experiences.
                    </p>
                    <p>
                        My goal is to grow into a Full-Stack Developer by continuously improving my frontend skills and exploring backend technologies. 
                        I'm always open to learning, taking on new challenges, and building meaningful projects.
                    </p>
                </div>

                <div className="about-info">
                    <div className="info">
                        <span className="logo"><RiGraduationCapFill /></span>
                        <span>BS INFORMATION TECHNOLOGY</span>
                    </div>
                    <div className="info">
                        <span className="logo"><FaCode /></span>
                        <span>Frontend Development</span>
                    </div>
                    <div className="info">
                        <span className="logo"><GoGoal /></span>
                        <span>Aspiring Full-Stack Developer</span>
                    </div>
                    <div className="info">
                       <span className="logo"><FaMapMarkerAlt /></span>
                       <span>Philippines</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;