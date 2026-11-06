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
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="javascript" />
                        <img src={reactjs} alt="reactjs" />
                    </div>
                </div>

                <div className="cards">
                    <h4>Tools</h4>
                    <div className="card">
                        <img src={git} alt="git" />
                        <img src={github} alt="github" />
                        <img src={vscode} alt="vscode" />
                        <img src={vite} alt="vite" />
                    </div>
                </div>

                <div className="cards">
                    <h4>Currently Learning</h4>
                    <div className="card">
                        <img src={bootstrap} alt="bootstrap" />
                        <img src={tailwindcss} alt="tailwindcss" />
                        <img src={typescript} alt="typescript" />
                        <img src={fullstack} alt="fullstack" />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;