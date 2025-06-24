import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="headline">Brewly - Freshly Brewed For You ☕</h1>
          <p className="subheadline">
            Discover our handcrafted coffee blends, delivered straight to your door. Taste the aroma of tradition.
          </p>
          <div className="hero-buttons">
            <Link to="/shop">
              <button className="primary-btn">🛒 Shop Now</button>
            </Link>
            <Link to="/subscribe">
              <button className="secondary-btn">📦 Subscribe</button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Coffee cup"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Why Choose Brewly?</h2>
        <div className="points">
          <div className="point">☕ Freshly Roasted Beans</div>
          <div className="point">🚚 Fast Delivery</div>
          <div className="point">🌱 Ethically Sourced</div>
          <div className="point">💰 Affordable Subscriptions</div>
        </div>
      </section>
    </div>
  );
};
