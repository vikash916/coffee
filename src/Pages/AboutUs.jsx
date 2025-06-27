import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Coffee</h1>
        <p>
          Brewing passion since 1990 — we bring you coffee that connects tradition
          with taste, aroma, and quality. Crafted with care from bean to cup.
        </p>
      </div>

      <div className="about-sections">
        <section className="about-section">
          <div className="text">
            <h2>☕ Our Journey</h2>
            <p>
              What started as a small roastery in a local market has grown into a beloved
              coffee brand serving thousands of happy customers across the country.
            </p>
          </div>
          <div className="img">
            <img src="image6.jpg" alt="Coffee Journey" />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="text">
            <h2>🌿 Ethically Sourced</h2>
            <p>
              We partner with local farmers to ensure that every bean we roast is grown
              with care and respect for both people and planet.
            </p>
          </div>
          <div className="img">
            <img src="image5.jpg" alt="Coffee Farm" />
          </div>
        </section>

        <section className="about-section">
          <div className="text">
            <h2>🎯 Our Vision</h2>
            <p>
              To deliver premium, freshly roasted coffee that creates moments of joy
              and energizes lives.
            </p>
          </div>
          <div className="img">
            <img src="image4.jpg" alt="Vision of Coffee" />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="text">
            <h2>🤝 Join the Coffee Club</h2>
            <p>
              Whether you're a casual sipper or a coffee connoisseur, there's a seat
              for you at our table. Explore, subscribe, and sip with us!
            </p>
          </div>
          <div className="img">
            <img src="image3.jpg" alt="Join Coffee Club" />
          </div>
        </section>
      </div>
    </div>
  );
};