import "./Skills.css";

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h3>My Skills</h3>
            <p>Technologies and tools I use in building web applications.</p>

            <div className="my-technologies">

                <div className="my-skills">
                    <h4>Frontend Development</h4>
                    <div>
                        <img alt="html" />
                        <img alt="css" />
                        <img alt="javascript" />
                        <img alt="reactjs" />
                    </div>
                </div>

                <div className="my-tools">
                    <h4>Tools</h4>
                    <div>
                        <img alt="git" />
                        <img alt="github" />
                        <img alt="vscode" />
                        <img alt="vite" />
                    </div>
                </div>

                <div className="currently-learning">
                    <h4>Currently Learning</h4>
                    <div>
                        <img alt="bootstrap" />
                        <img alt="tailwindcss" />
                        <img alt="typescript" />
                        <img alt="fullstack" />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;