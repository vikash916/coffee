// import "./Payment.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export const PaymentForm = () => {
//   const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [loading, setLoading] = useState(false); // ✅ added

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true); 
//     setTimeout(() => {
//       navigate("/confirmation");
//     }, 2000);
//   };

//   return (
//     <div className="payment-container">
//       <h2>Secure Payment</h2>
//       <form className="payment-form" onSubmit={handleSubmit}>
//         {/* ... All your form inputs ... */}

//         {paymentMethod === "UPI" ? (
//           <label>
//             UPI ID
//             <input type="text" required placeholder="name@bank" />
//           </label>
//         ) : (
//           <div className="card-details">
//             <label>
//               Card Number
//               <input type="text" required placeholder="1234 5678 9012 3456" />
//             </label>
//             <label>
//               Expiry Date
//               <input type="text" required placeholder="MM/YY" />
//             </label>
//             <label>
//               CVV
//               <input type="password" required placeholder="123" />
//             </label>
//           </div>
//         )}

//         <button type="submit" className="pay-btn" disabled={loading}>
//           {loading ? <span className="loader"></span> : "Pay Now"}
//         </button>
//       </form>
//     </div>
//   );
// };
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const PaymentForm = ({ product }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/confirmation"); // or just show a thank you message
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>

      {product && (
        <div className="product-summary">
          <h4>You're buying:</h4>
          <p>
            <strong>{product.name}</strong> — <span>{product.price}</span>
          </p>
        </div>
      )}

      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" required placeholder="John Doe" />
        </label>

        <label>
          Email Address
          <input type="email" required placeholder="john@example.com" />
        </label>

        <label>
          Phone Number
          <input type="tel" required placeholder="9876543210" />
        </label>

        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={() => setPaymentMethod("UPI")}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={() => setPaymentMethod("Card")}
            />
            Debit/Credit Card
          </label>
        </div>

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
