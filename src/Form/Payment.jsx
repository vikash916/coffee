import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const PaymentForm = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [loading, setLoading] = useState(false); // ✅ added

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    setTimeout(() => {
      navigate("/confirmation");
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        {/* ... All your form inputs ... */}

        {paymentMethod === "UPI" ? (
          <label>
            UPI ID
            <input type="text" required placeholder="name@bank" />
          </label>
        ) : (
          <div className="card-details">
            <label>
              Card Number
              <input type="text" required placeholder="1234 5678 9012 3456" />
            </label>
            <label>
              Expiry Date
              <input type="text" required placeholder="MM/YY" />
            </label>
            <label>
              CVV
              <input type="password" required placeholder="123" />
            </label>
          </div>
        )}

        <button type="submit" className="pay-btn" disabled={loading}>
          {loading ? <span className="loader"></span> : "Pay Now"}
        </button>
      </form>
    </div>
  );
};
