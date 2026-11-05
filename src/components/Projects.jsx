import "./Projects.css";
import expsensetracker from "../assets/expensetracker.png";
import ecommerce from "../assets/ecommerce.png";
import adminsupport from "../assets/adminsupport.png";

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
                    <img src={expsensetracker} alt="project"/>
                    <h3>Personal Expense Tracker Dashboard</h3>
                    <p>
                        A personal finance dashboard designed to help users track their income, expenses, and monthly budgets. 
                        It will feature transaction management, spending summaries, and visual reports to make personal financial tracking easier and more organized. 
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
                    <img src={ecommerce} alt="project"/>
                    <h3>E-Commerce Shopping Application</h3>
                    <p>
                        A responsive e-commerce application designed to provide users with a smooth online shopping experience. 
                        It will include product browsing, search and filtering, shopping cart management, and a checkout interface.
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
                    <img src={adminsupport} alt="project"/>
                    <h3>Admin Support Ticket Management Dashboard</h3>
                    <p>
                        A customer support management dashboard designed to help teams organize, monitor, and manage customer concerns efficiently. 
                        It will feature ticket creation, priority levels, status tracking, and filtering tools for a more structured support workflow.
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