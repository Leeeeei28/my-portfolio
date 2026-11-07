import "./Navbar.css";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar({isDarkMode, toggleTheme}) {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }
    
    return (
        <nav>
            <div className="nav-logo">
                <p><span className="logo">&lt;&gt;</span> Leeei<span className="logo">&lt;/&gt;</span></p>
            </div>

            <button
                className="burger-menu"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? "X" : "☰"}
            </button>

            <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>

            <button onClick={toggleTheme} className="toggle-theme" aria-label="Toggle color theme">
                {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
        </nav>
    );
}

export default Navbar;