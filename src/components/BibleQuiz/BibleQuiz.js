import React, { useState } from 'react';
import Results from '../Results/Results'; // Import the new Results component

const BibleQuiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [failedQuestions, setFailedQuestions] = useState([]); // Track failed questions
  const [passedQuestions, setPassedQuestions] = useState([]); // Track passed questions

  const handleAnswerClick = (isCorrect, question) => {
    if (isCorrect) {
      setScore(score + 1);
      setPassedQuestions([...passedQuestions, question]); // Add to passed questions
    } else {
      setFailedQuestions([...failedQuestions, question]); // Add to failed questions
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Results 
          score={score}
          totalQuestions={questions.length}
          failedQuestions={failedQuestions}
          passedQuestions={passedQuestions}
        />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option.isCorrect, questions[currentQuestion])}>
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BibleQuiz;
