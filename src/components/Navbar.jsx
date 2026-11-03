import "./Navbar.css";

function Navbar() {
    
    return (
        <nav>
            <div className="nav-logo">
                <p><span className="logo">&lt;/&gt;</span> Leeei</p>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="burger-menu">
                <p>burger menu</p>
            </div>
        </nav>
    );
}

export default Navbar;