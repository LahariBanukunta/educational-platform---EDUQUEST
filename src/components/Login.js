import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate(); // Create navigate function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send the credentials
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        console.log("Login successful:", data.message);

        // Optionally store the token for future requests (if needed)
        localStorage.setItem("authToken", data.token); // Store token

        // Redirect to the Welcome page after successful login
        navigate("/welcome"); // Navigate to the welcome page
      } else {
        // Handle error
        console.error("Error:", data.message);
        setMessage(data.message); // Show error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to EduQuest</h2>
        <input
          type="email"
          placeholder="Email"
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
        {message && <p>{message}</p>}
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
