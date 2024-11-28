import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/courses" className="navbar-link">Courses</Link>
          </li>
          <li>
            <Link to="/quizzes" className="navbar-link">Quizzes</Link>
          </li>
          <li>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to EduQuest</h1>
        <p className="welcome-description">
          Welcome to EduQuest, your ultimate companion for an enriching learning journey! Whether you're delving into the exciting world of Artificial Intelligence, unraveling the mysteries of Machine Learning, building dynamic web applications with Full Stack Development, exploring the intricacies of Computer Networks, or mastering the art of Cloud Computing, EduQuest has got you covered.

          Our platform offers carefully curated courses that simplify complex topics, making learning interactive and enjoyable. Each subject is complemented by engaging quizzes designed to test your knowledge and strengthen your understanding.

          What sets EduQuest apart is its personalized Dashboard, where you can track your progress, revisit previous lessons, and get tailored recommendations to enhance your learning experience.

          Join EduQuest today and take the first step toward achieving your academic and career goals. Dive in, explore, and transform the way you learn!


        </p>
      </div>
    </div>
  );
};

export default Welcome;
