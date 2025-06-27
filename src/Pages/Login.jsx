import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in with:", { email, password });
    // Simulate login or integrate later
  };

  return (
    <div className="login-container">
      <h2>Welcome Back ☕</h2>
      <p className="login-subtext">Login to your CoffeeVerse account</p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p className="signup-text">
        Don’t have an account? <a href="#">Create one</a>
      </p>
    </div>
  );
};
