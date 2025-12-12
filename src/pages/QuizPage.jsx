import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { demoQuizzes } from "../fake-backend/data";

const QuizPage = () => {
  const { id } = useParams();
  const quiz = demoQuizzes.find((q) => q.id === Number(id));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!quiz) return <h2>Quiz not found.</h2>;

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (index) => {
    setSelected(index);

    if (index === question.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  return (
    <div className="page">
      {/* QUIZ HEADER */}
      <div className="page-header" style={{ marginBottom: 10 }}>
        <div className="page-title-block">
          <h1 style={{ fontSize: "30px", marginBottom: 6 }}>{quiz.title}</h1>
          <p style={{ fontSize: "16px", color: "var(--muted)" }}>
            {quiz.description}
          </p>
        </div>
      </div>

      {/* FINISHED QUIZ SCREEN */}
      {finished ? (
        <div
          className="card"
          style={{
            marginTop: 50,
            padding: 30,
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "26px" }}>
            Your Score: {score} / {quiz.questions.length}
          </h2>
          <p style={{ color: "#9ca3af", marginTop: 10, fontSize: "15px" }}>
            Great job! Continue learning and improving.
          </p>
        </div>
      ) : (
        /* QUIZ QUESTION BLOCK */
        <div
          className="card"
          style={{
            padding: 24,
            marginTop: 50, // pushes question box down cleanly
            borderRadius: "14px",
          }}
        >
          {/* QUESTION TITLE */}
          <h3
            className="card-title"
            style={{ fontSize: "22px", marginBottom: 10 }}
          >
            Question {currentQuestion + 1} / {quiz.questions.length}
          </h3>

          {/* QUESTION TEXT */}
          <p
            className="card-subtitle"
            style={{ marginTop: 10, fontSize: "16px" }}
          >
            {question.q}
          </p>

          {/* OPTIONS */}
          <div
            style={{
              marginTop: 25,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {question.options.map((opt, index) => {
              const isCorrect =
                selected === index && index === question.answer;
              const isWrong =
                selected === index && index !== question.answer;

              return (
                <button
                  key={index}
                  onClick={() => selected === null && handleAnswer(index)}
                  className="btn"
                  style={{
                    textAlign: "left",
                    padding: "12px 14px",
                    fontSize: "15px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.12)",

                    background: isCorrect
                      ? "rgba(34,197,94,0.25)"
                      : isWrong
                      ? "rgba(239,68,68,0.25)"
                      : "rgba(15,23,42,0.9)",

                    transition: "0.2s",
                    cursor: selected === null ? "pointer" : "default",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
