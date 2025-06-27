import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import "./Header.css";

export const Header = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // dummy count
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) onSearch(val);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">☕ CoffeeVerse</Link>
      </div>

      {/* Right-side Icons (same row on mobile) */}
      <div className="header-icons">
        {/* 🍔 Hamburger */}
        <button className="icon-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={20} />
        </button>

        {/* 🔍 Search */}
        <button className="icon-btn" onClick={() => setShowSearch(!showSearch)}>
          <Search size={20} />
        </button>

        {/* 🛒 Cart */}
        <Link to="/cart" className="icon-btn">
          <ShoppingCart size={20} />
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/subscribe" onClick={() => setMenuOpen(false)}>Subscribe</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
         <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
         <Link to="/store" onClick={() => setMenuOpen(false)}>Our Store</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      {/* 👤 User Dropdown (desktop only) */}
      <div className="icon-btn user-container">
        <User size={20} />
        <div className="user-dropdown">
          {isLoggedIn ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={toggleLogin}>Logout</button>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search coffee..."
          />
        </div>
      )}
    </header>
  );
};
