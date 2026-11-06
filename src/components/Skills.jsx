import "./Skills.css";

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h3>My Skills</h3>
            <p>Technologies and tools I use in building web applications.</p>

            <div className="my-technologies">

                <div className="cards">
                    <h4>Frontend Development</h4>
                    <div className="my-skills">
                        <img alt="html" />
                        <img alt="css" />
                        <img alt="javascript" />
                        <img alt="reactjs" />
                    </div>
                </div>

                <div className="cards">
                    <h4>Tools</h4>
                    <div className="my-tools">
                        <img alt="git" />
                        <img alt="github" />
                        <img alt="vscode" />
                        <img alt="vite" />
                    </div>
                </div>

                <div className="cards">
                    <h4>Currently Learning</h4>
                    <div className="currently-learning">
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