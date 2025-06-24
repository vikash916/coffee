// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "./Shop.css";

// const products = [
//   {
//     id: 1,
//     name: "Arabica Gold Blend",
//     price: "₹349",
//     image: "LATTE.jpg",
//     type: "Instant",
//     soldOut: false,
//   },
//   {
//     id: 2,
//     name: "Classic Dark Roast",
//     price: "₹399",
//     image: "MUG.jpg",
//     type: "Ground",
//     soldOut: true,
//   },
//   {
//     id: 3,
//     name: "Hazelnut Instant",
//     price: "₹299",
//     image: "YUEN.jpg",
//     type: "Instant",
//     soldOut: false,
//   },
//   {
//     id: 4,
//     name: "Vanilla Light Roast",
//     price: "₹379",
//     image: "LATTE.jpg",
//     type: "Decoction",
//     soldOut: false,
//   },
// ];
// const SomeComponent = () => {
//   const navigate = useNavigate();

//   const handleSubscribe = () => {
//     navigate("/payment");
//   }};
// export const Shop = () => {
//   const [filter, setFilter] = useState("All");

//   const filtered = filter === "All"
//     ? products
//     : products.filter((p) => p.type === filter);

//   return (
//     <div className="shop-container">
//       <h2>Instant Coffee Collection</h2>
//       <p className="shop-subtitle">Ready to brew in seconds.</p>

//       <div className="filter-tabs">
//         {["All", "Instant", "Ground", "Decoction"].map((tab) => (
//           <button 
          
//             key={tab}
//             className={filter === tab ? "active" : ""}
//             onClick={() => setFilter(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="product-grid">
//         {filtered.map((product) => (
//           <div className="product-card" key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p className="price">{product.price}</p>
//             {product.soldOut ? (
//               <div className="sold-out">Sold Out</div>
//             ) : (
//               <button>Add to Cart</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { PaymentForm } from "./../Form/Payment"; 
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Arabica Gold Blend",
    price: "₹349",
    image: "LATTE.jpg",
    type: "Instant",
    soldOut: false,
  },
  {
    id: 2,
    name: "Classic Dark Roast",
    price: "₹399",
    image: "MUG.jpg",
    type: "Ground",
    soldOut: true,
  },
  {
    id: 3,
    name: "Hazelnut Instant",
    price: "₹299",
    image: "YUEN.jpg",
    type: "Instant",
    soldOut: false,
  },
  {
    id: 4,
    name: "Vanilla Light Roast",
    price: "₹379",
    image: "LATTE.jpg",
    type: "Decoction",
    soldOut: false,
  },
];

export const Shop = () => {
  const [filter, setFilter] = useState("All");
  const [showPayment, setShowPayment] = useState(false); // 🆕

  const handleSubscribe = () => {
    setShowPayment(true); // 🆕 switch to PaymentForm view
  };

  const filtered =
    filter === "All" ? products : products.filter((p) => p.type === filter);

  // 🆕 If payment is triggered, show that instead
  if (showPayment) {
    return <PaymentForm />;
  }

  return (
    <div className="shop-container">
      <h2>Instant Coffee Collection</h2>
      <p className="shop-subtitle">Ready to brew in seconds.</p>

      <div className="filter-tabs">
        {["All", "Instant", "Ground", "Decoction"].map((tab) => (
          <button
            key={tab}
            className={filter === tab ? "active" : ""}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            {product.soldOut ? (
              <div className="sold-out">Sold Out</div>
            ) : (
              <button onClick={handleSubscribe}>Buy Now</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
