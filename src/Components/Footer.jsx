import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Navigation */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Subscribe</li>
            <li>Our Story</li>
            <li>Information</li>
          </ul>
        </div>

        {/* Info Links */}
        <div className="footer-section">
          <h4>Info</h4>
          <ul>
            <li>Become a Channel Partner</li>
            <li>Our Stores</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Sign up to get special offers, giveaways, and once-in-a-lifetime deals.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Logo and Socials */}
        <div className="footer-section logo-social">
          <div className="footer-logo">Brewly ☕</div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Brewly. All rights reserved.</p>
      </div>
    </footer>
  );
};
