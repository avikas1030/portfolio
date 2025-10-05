import React, { useState } from "react";
import "./nav.css";
import profile from "../../assets/profile.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <nav id="nav" className="navbar">
        <div className="nav-left">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Projects</li>
          <li>My Learnings</li>
          <li>Coding Profiles</li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>Projects</li>
            <li onClick={toggleMenu}>My Learnings</li>
            <li onClick={toggleMenu}>Coding Profiles</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
