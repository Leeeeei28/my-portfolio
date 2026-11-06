import "./Skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reactjs from "../assets/reactjs.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import vite from "../assets/vite.png";
import bootstrap from "../assets/bootstrap.png";
import tailwindcss from "../assets/tailwindcss.png";
import typescript from "../assets/typescript.png";
import fullstack from "../assets/fullstack.png";

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h3>My Skills</h3>
            <p>Technologies and tools I use in building web applications.</p>

            <div className="my-technologies">

                <div className="cards">
                    <h4>Frontend Development</h4>
                    <div className="card">

                        <div className="card-img">
                            <img src={html} alt="html" />
                            <label>HTML</label>
                        </div>

                        <div className="card-img">
                            <img src={css} alt="css" />
                            <label>CSS</label>
                        </div>

                        <div className="card-img">
                            <img src={js} alt="javascript" />
                            <label>JavaScript</label>
                        </div>

                        <div className="card-img">
                            <img src={reactjs} alt="reactjs" />
                            <label>React JS</label>
                        </div>

                    </div>
                </div>

                <div className="cards">
                    <h4>Tools</h4>
                    <div className="card">

                        <div className="card-img">
                            <img src={git} alt="git" />
                            <label>Git</label>
                        </div>

                        <div className="card-img">
                            <img src={github} alt="github" />
                            <label>Github</label>
                        </div>

                        <div className="card-img">
                            <img src={vscode} alt="vscode" />
                            <label>VS Code</label>
                        </div>

                        <div className="card-img">
                            <img src={vite} alt="vite" />
                            <label>Vite</label>
                        </div>

                    </div>
                </div>

                <div className="cards">
                    <h4>Currently Learning</h4>
                    <div className="card">

                        <div className="card-img">
                            <img src={bootstrap} alt="bootstrap" />
                            <label>Bootstrap</label>
                        </div>

                        <div className="card-img">
                            <img src={tailwindcss} alt="tailwindcss" />
                            <label>Tailwind CSS</label>
                        </div>

                        <div className="card-img">
                            <img src={typescript} alt="typescript" />
                            <label>TypeScript</label>
                        </div>

                        <div className="card-img">
                            <img src={fullstack} alt="fullstack" />
                            <label>Full Stack</label>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;