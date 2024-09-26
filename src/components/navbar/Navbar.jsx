// src/MobileNavbar.js
import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  // Génère un ID utilisateur aléatoire entre 1 et 2
  const userId = Math.floor(Math.random() * 2) + 1;

  return (
    <nav className="navbar">
      <a href={`/profile/${userId}`} className="nav-item">
        <FaUser size={24} />
      </a>
      <a href="/search" className="nav-item">
        <FaSearch size={24} />
      </a>
      <a href="/" className="nav-item">
        <FaHome size={24} />
      </a>
    </nav>
  );
}

export default Navbar;