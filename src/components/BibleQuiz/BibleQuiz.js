import React, { useState } from "react";
import { questions, shuffleArray } from "../Questions/Questions"; // Correct way to import named exports
import Results from "../Results/Results";

const BibleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [failedQuestions, setFailedQuestions] = useState([]);
  const [passedQuestions, setPassedQuestions] = useState([]);

  const handleAnswerClick = (isCorrect, question) => {
    if (isCorrect) {
      setScore(score + 1);
      setPassedQuestions([...passedQuestions, question]);
    } else {
      setFailedQuestions([...failedQuestions, question]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setFailedQuestions([]);
    setPassedQuestions([]);

    // Shuffle the answer options for each question again
    questions.forEach((question) => {
      question.answerOptions = shuffleArray(question.answerOptions);
    });
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <Results
            score={score}
            totalQuestions={questions.length}
            failedQuestions={failedQuestions}
            passedQuestions={passedQuestions}
          />
          <div className="button-container">
            <button onClick={handleReplay} className="replay-button">
            Retry Quiz
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count-container">
              <span className="question-count">
                Question {currentQuestion + 1}
              </span>
              /{questions.length}
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerClick(
                      option.isCorrect,
                      questions[currentQuestion]
                    )
                  }
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BibleQuiz;
