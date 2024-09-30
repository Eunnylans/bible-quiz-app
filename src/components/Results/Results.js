import React, { useState } from 'react';
import './Results.css';



const Results = ({ score, totalQuestions, failedQuestions, passedQuestions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleButtonClick = (question) => {
    // Toggle display of the question
    setSelectedQuestion(selectedQuestion === question ? null : question);
  };

  const renderQuestionDetails = (question) => {
    const correctAnswer = question.answerOptions.find(option => option.isCorrect);
    return (
      <div>
        <strong>Question:</strong> {question.questionText}
        <br />
        <strong>Correct Answer:</strong> {correctAnswer ? correctAnswer.answerText : 'No correct answer'}
      </div>
    );
  };

  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <p>You scored {score} out of {totalQuestions}</p>

      <div className="results-section">
        <h3>Passed Questions</h3>
        {passedQuestions.length > 0 ? (
          passedQuestions.map((question, index) => (
            <button key={index} onClick={() => handleButtonClick(question)} className="result-button">
              Question {index + 1}
            </button>
          ))
        ) : (
          <p>No questions passed.</p>
        )}

        {selectedQuestion && passedQuestions.includes(selectedQuestion) && (
          <div className="question-details">
            {renderQuestionDetails(selectedQuestion)}
          </div>
        )}
      </div>

      <div className="results-section">
        <h3>Failed Questions</h3>
        {failedQuestions.length > 0 ? (
          failedQuestions.map((question, index) => (
            <button key={index} onClick={() => handleButtonClick(question)} className="result-button">
              Question {index + 1}
            </button>
          ))
        ) : (
          <p>No questions failed.</p>
        )}

        {selectedQuestion && failedQuestions.includes(selectedQuestion) && (
          <div className="question-details">
            {renderQuestionDetails(selectedQuestion)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
