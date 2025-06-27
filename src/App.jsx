import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Header } from "./Components/Header"; 
import{ Footer } from "./Components/Footer";
import { Home } from "./Pages/home";          
import { Shop } from "./Pages/Shop";
import { AboutUs } from "./Pages/AboutUs";
import { Store } from "./Pages/Store";
import { Subscribe } from "./Pages/Subscribe";
import { Contact } from "./Pages/Contact";
import{PaymentForm} from "./Form/Payment";
import{ ChatBox } from "./Components/Chatbox";
import{ Login } from "./Pages/Login"; 
// Placeholder components
//const Shop = () => <h2 style={{ padding: "2rem" }}>🛍️ Shop Page</h2>;
//const Subscribe = () => <h2 style={{ padding: "2rem" }}>📦 Subscribe Page</h2>;
//const About = () => <h2 style={{ padding: "2rem" }}>📖 About Us</h2>;
//const Contact = () => <h2 style={{ padding: "2rem" }}>📞 Contact Page</h2>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <ChatBox />
      <Footer />
    </Router>
  );
}

export default App;
