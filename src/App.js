// src/App.js

import React from 'react';
import './App.css';
import BibleQuiz from './components/BibleQuiz/BibleQuiz';
import { questions, shuffleArray } from './components/Questions/Questions'; // Import the questions

function App() {
  return (
    <div className="App">
      <h1>Bible Quiz</h1>
      <BibleQuiz questions={questions}  /> {/* Pass questions as props */}
    </div>
  );
}

export default App;
