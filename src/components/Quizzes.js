import React from "react";
import '../styles/Quizzes.css';

function Quizzes() {
  return (
    <div className="quizzes-container">
      <h2 className="title">Quizzes</h2>
      <p>Select a subject to take a quiz:</p>

      <div className="subjects-container">
        {["ML", "AI", "FSD", "CN", "CC"].map((subject) => (
          <button
            key={subject}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onClick={() => alert(`Quiz for ${subject} coming soon!`)}
            className="quiz-button"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;
