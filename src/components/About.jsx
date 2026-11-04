import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-profile">
                <img src alt="profile" />
            </div>
            <div className="about-description">
                <h2>ABOUT ME</h2>
                <div className="about-title">
                    <h1>
                        Turning Ideas into
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
                    <p>BS INFORMATION TECHNOLOGY</p>
                    <p>Frontend Development</p>
                    <p>Aspiring Full-Stack Developer</p>
                    <p>Philippines</p>
                </div>
            </div>
        </section>
    )
}

export default About;