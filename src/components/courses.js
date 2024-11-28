import React, { useState } from "react";
import "../styles/Courses.css";

function Courses() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = {
    "Machine Learning": [
      { topic: "Introduction to ML", link: "https://youtu.be/ukzFI9rgwfU?si=9BJ2TdL72r9d8Sov" },
      { topic: "Supervised Learning", link: "https://youtu.be/SupervisedLearning" },
      { topic: "Unsupervised Learning", link: "https://youtu.be/UnsupervisedLearning" },
      { topic: "Neural Networks", link: "https://youtu.be/NeuralNetworks" },
      { topic: "Deep Learning", link: "https://youtu.be/DeepLearning" },
    ],
    "Artificial Intelligence": [
      { topic: "Introduction to AI", link: "https://youtu.be/AIIntro" },
      { topic: "Search Algorithms", link: "https://youtu.be/SearchAlgorithms" },
      { topic: "Expert Systems", link: "https://youtu.be/ExpertSystems" },
      { topic: "Natural Language Processing", link: "https://youtu.be/NLP" },
      { topic: "Computer Vision", link: "https://youtu.be/ComputerVision" },
    ],
    "Full Stack Development": [
      { topic: "HTML & CSS Basics", link: "https://youtu.be/HTMLBasics" },
      { topic: "JavaScript Essentials", link: "https://youtu.be/JSEssentials" },
      { topic: "React Basics", link: "https://youtu.be/ReactBasics" },
      { topic: "Node.js Introduction", link: "https://youtu.be/NodeIntro" },
      { topic: "Database Integration", link: "https://youtu.be/DBIntegration" },
    ],
    "Computer Networks": [
      { topic: "Introduction to Networking", link: "https://youtu.be/NetworkingIntro" },
      { topic: "OSI Model", link: "https://youtu.be/OSIModel" },
      { topic: "TCP/IP Protocol", link: "https://youtu.be/TCPIP" },
      { topic: "Network Security", link: "https://youtu.be/NetworkSecurity" },
      { topic: "Wireless Networks", link: "https://youtu.be/WirelessNetworks" },
    ],
    "Cloud Computing": [
      { topic: "Introduction to Cloud", link: "https://youtu.be/CloudIntro" },
      { topic: "AWS Basics", link: "https://youtu.be/AWSBasics" },
      { topic: "Google Cloud Platform", link: "https://youtu.be/GCPBasics" },
      { topic: "Azure Overview", link: "https://youtu.be/AzureOverview" },
      { topic: "Cloud Security", link: "https://youtu.be/CloudSecurity" },
    ],
  };

  const goBack = () => {
    setSelectedSubject("");
  };

  return (
    <div className="courses-container">
      {!selectedSubject ? (
        <>
          <h2 className="title">Explore Courses</h2>
          <p className="intro-text">Select a subject to explore curated learning topics and resources:</p>

          <div className="subjects-container">
            {Object.keys(subjects).map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className="subject-button"
              >
                {subject}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="topics-container">
          <h2 className="title">{selectedSubject}</h2>
          <ul className="topics-list">
            {subjects[selectedSubject].map((item, index) => (
              <li key={index} className="topic-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="topic-link">
                  {item.topic}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={goBack} className="back-button">Go Back</button>
        </div>
      )}
    </div>
  );
}

export default Courses;
