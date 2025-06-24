import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Header } from "./Components/Header"; 
import{ Footer } from "./Components/Footer";
import { Home } from "./Pages/home";          
import { Shop } from "./Pages/Shop";
import { Subscribe } from "./Pages/Subscribe";
import{PaymentForm} from "./Form/Payment";
// Placeholder components
//const Shop = () => <h2 style={{ padding: "2rem" }}>🛍️ Shop Page</h2>;
//const Subscribe = () => <h2 style={{ padding: "2rem" }}>📦 Subscribe Page</h2>;
const About = () => <h2 style={{ padding: "2rem" }}>📖 About Us</h2>;
const Contact = () => <h2 style={{ padding: "2rem" }}>📞 Contact Page</h2>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
