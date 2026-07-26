import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="/" className="logo">
          Anza<span>.</span>
        </a>

        {/* Desktop Navigation
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav> */}

        {/* Theme Toggle (placeholder for now) */}
        <ThemeToggle />

        {/* Mobile Menu Button
        <button
          className="menu-btn"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button> */}

      </div>
    </header>
  );
}