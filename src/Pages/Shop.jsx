// import { useState, useEffect } from "react";
// import "./Shop.css";
// import { PaymentForm } from "../Form/Payment";  

// export const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showPayment, setShowPayment] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3001/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch products");
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleBuyNow = (product) => {
//     setSelectedProduct(product);
//     setShowPayment(true);
//   };

//   const filteredProducts =
//     filter === "All" ? products : products.filter((p) => p.type === filter);

//   if (showPayment && selectedProduct) {
//     return <PaymentForm product={selectedProduct} />;
//   }

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

//       {loading ? (
//         <p className="loading">☕ Brewing your coffee list...</p>
//       ) : error ? (
//         <p className="error">❌ {error}</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <div className="product-card" key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p className="price">₹{product.price}</p>
//               {product.soldOut ? (
//                 <div className="sold-out">Sold Out</div>
//               ) : (
//                 <button onClick={() => handleBuyNow(product)}>Buy Now</button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


import { useState, useEffect } from "react";
import "./Shop.css";
import { PaymentForm } from "../Form/Payment";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Static product list (replace images with real links or public folder paths)
  const staticProducts = [
    {
      "id": 1,
      "name": "Arabica Gold Blend",
      "price": 349,
      "image": "image1.jpg",
      "type": "Instant",
      "soldOut": false
    },
    {
      "id": 2,
      "name": "Classic Dark Roast",
      "price": 399,
      "image": "image2.jpg",
      "type": "Ground",
      "soldOut": false
    },
    {
      "id": 3,
      "name": "Vanilla Light Roast",
      "price": 379,
      "image": "image3.jpg",
      "type": "Decoction",
      "soldOut": false
    },
    {
      "id": 4,
      "name": "Hazelnut Instant",
      "price": 299,
      "image": "image4.jpg",
      "type": "Instant",
      "soldOut": false
    },
    {
      "id": 5,
      "name": "Café Mocha Blend",
      "price": 429,
      "image": "image5.jpg",
      "type": "Ground",
      "soldOut": true
    },
    {
      "id": 6,
      "name": "Espresso Roast",
      "price": 499,
      "image": "image6.jpg",
      "type": "Ground",
      "soldOut": false
    },
    {
      "id": 7,
      "name": "South Indian Filter",
      "price": 259,
      "image": "image7.jpg",
      "type": "Decoction",
      "soldOut": false
    },
    {
      "id": 8,
      "name": "Coconut Cold Brew",
      "price": 349,
      "image": "image8.jpg",
      "type": "Instant",
      "soldOut": false
    },
    {
      "id": 9,
      "name": "Organic Medium Roast",
      "price": 389,
      "image": "image9.jpg",
      "type": "Ground",
      "soldOut": true
    },
    {
      "id": 10,
      "name": "Spiced Cardamom Brew",
      "price": 459,
      "image": "image10.jpg",
      "type": "Decoction",
      "soldOut": false
    }

  ];

  useEffect(() => {
    // simulate async fetch
    setTimeout(() => {
      setProducts(staticProducts);
      setLoading(false);
    }, 500);
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPayment(true);
  };

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.type === filter);

  if (showPayment && selectedProduct) {
    return <PaymentForm product={selectedProduct} />;
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

      {loading ? (
        <p className="loading">☕ Brewing your coffee list...</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
              {product.soldOut ? (
                <div className="sold-out">Sold Out</div>
              ) : (
                <button onClick={() => handleBuyNow(product)}>Buy Now</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
