import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'; // Importing the CSS
import Signup from "./components/signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Courses from "./components/Courses";
import Quizzes from "./components/Quizzes";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
