// src/components/Question.js
import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        onAnswered(false); // assume no answer = wrong
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeRemaining, onAnswered]);

  function handleAnswer(index) {
    const isCorrect = index === question.correctIndex;
    onAnswered(isCorrect);
  }

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(index)}>{answer}</button>
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
