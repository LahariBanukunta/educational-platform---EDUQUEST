import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import '../styles/Login.css';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Use the state variables directly
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle success
        console.log(data.message);
        setMessage(data.message);  // Optionally update the message state to display a success message
        navigate("/login");  // Redirect to login page after successful signup
      } else {
        // Handle error
        console.error(data.message);
        setMessage(data.message);  // Optionally update the message state to display an error
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };
  
  
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up for EduQuest</h2>
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
        <button type="submit">Sign Up</button>
        {message && <p>{message}</p>}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
