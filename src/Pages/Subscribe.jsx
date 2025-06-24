import "./Subscribe.css";

const plans = [
  {
    id: 1,
    title: "3 Months Plan",
    price: "₹999",
    features: [
      "3 months of coffee",
      "Free Shipping 🙵️",
      "Free Brass Davara"
    ]
  },
  {
    id: 2,
    title: "6 Months Plan",
    price: "₹1,899",
    features: [
      "6 months of coffee",
      "Free Shipping",
      "+1 month bonus"
    ]
  },
  {
    id: 3,
    title: "12 Months Plan",
    price: "₹3,499",
    features: [
      "12 months of coffee",
      "Free Shipping",
      "+2 months bonus"
    ]
  },
  {
    id: 4,
    title: "24 Months Plan",
    price: "₹6,499",
    features: [
      "24 months of coffee",
      "Free Shipping",
      "+4 months bonus"
    ]
  }
];

export const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2>Subscription</h2>
      <p className="subscribe-desc">
        Restocking your favourite coffee every month is a hassle you’ll never have to worry about again. Choose any plan and enjoy fresh drops at your doorstep.
      </p>

      <section className="subscribe-benefits">
        <h3>Why Subscribe to Us?</h3>
        <ul>
          <li>☕ Freshly roasted coffee delivered every month</li>
          <li>🚚 Free shipping on all subscription plans</li>
          <li>🏱 Exclusive subscriber-only gifts and offers</li>
          <li>🔁 Cancel or pause your plan anytime</li>
          <li>🌿 Sustainably sourced beans, roasted in-house</li>
        </ul>
      </section>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <h3>{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
