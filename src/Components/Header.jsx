import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <div className="logo">Brewly ☕</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/subscribe" className="nav-link">Subscribe</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Our Stores</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="header-icons">
        <Link to="/search" className="icon-btn"><FaSearch /></Link>
        <Link to="/cart" className="icon-btn"><FaShoppingCart /></Link>
        <Link to="/login" className="icon-btn"><FaUser /></Link>
      </div>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
};
