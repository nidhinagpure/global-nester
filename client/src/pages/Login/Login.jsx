import "./Login.css";

import React, { useState } from "react";

const Login = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "003b71fa-e00b-41d4-a257-a2fe662bcb5e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Submitted Successfully! 😊");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("Network error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmit} className="contact-form">
        <h2>Contact Us</h2>

        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Write your message here</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows="6" required></textarea>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending..." : "Let's Go"}
        </button>

        {result && <span className="result">{result}</span>}
      </form>
    </div>
  );
};

export default Login;
