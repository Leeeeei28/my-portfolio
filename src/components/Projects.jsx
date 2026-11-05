import "./Projects.css";
import profile from "../assets/profile.jpg";

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h1>Featured Projects</h1>
            <p> 
                A showcase of my latest work, featuring practical solutions and clean designs 
                using modern technologies
            </p>
            <div className="my-projects">
                <div className="projects">
                    <img src={profile} alt="project"/>
                    <h3>Restaurant</h3>
                    <p>
                        Lorem ipsum is a scrambled, nonsensical pseudo-Latin placeholder or dummy 
                        text widely utilized across the graphic design, publishing, web development, 
                    </p>
                    <div className="technologies-used">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>   
                        <p>React JS</p>
                    </div>
                    <div className="demo-projects">
                        <a href="#">View Code</a>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
                <div className="projects">
                    <img src={profile} alt="project"/>
                    <h3>Student Management</h3>
                    <p>
                        Lorem ipsum is a scrambled, nonsensical pseudo-Latin placeholder or dummy 
                        text widely utilized across the graphic design, publishing, web development,
                    </p>
                    <div className="technologies-used">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>   
                        <p>React JS</p>
                    </div>
                    <div className="demo-projects">
                        <a href="#">View Code</a>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
                <div className="projects">
                    <img src={profile} alt="project"/>
                    <h3>Expense Tracker</h3>
                    <p>
                        Lorem ipsum is a scrambled, nonsensical pseudo-Latin placeholder or dummy 
                        text widely utilized across the graphic design, publishing, web development,
                    </p>
                    <div className="technologies-used">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>   
                        <p>React JS</p>
                    </div>
                    <div className="demo-projects">
                        <a href="#">View Code</a>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;