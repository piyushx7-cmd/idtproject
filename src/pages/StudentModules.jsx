import React from "react";
import { Link } from "react-router-dom";
import { getStudentModules, getArticles, getQuizzes } from "../fake-backend/data";

const StudentModules = () => {
  const modules = getStudentModules();
  const articles = getArticles();
  const quizzes = getQuizzes();

  return (
    <div className="page">

      {/* HEADER */}
      <div className="page-header">
        <div className="page-title-block">
          <h1>Learning Modules</h1>
          <p>Short, focused lessons that connect sustainability to your real life.</p>
        </div>
        <div className="page-tagline">Modules Overview · Demo Data</div>
      </div>

      {/* MODULE LIST */}
      <div className="grid grid-2" style={{ marginTop: 20 }}>
        {modules.map((m) => (
          <Link
            key={m.id}
            to={`/module/${m.id}`}
            className="card"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <h3 className="card-title" style={{ color: "#c084fc" }}>{m.title}</h3>
            <p className="card-subtitle">Level: {m.level}</p>
            <p className="card-meta">Click to open module</p>
          </Link>
        ))}
      </div>

      {/* SEPARATOR */}
      <hr
        style={{
          margin: "40px 0",
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      />

      {/* ARTICLE SECTION */}
      <div className="page-header">
        <div className="page-title-block">
          <h1>Articles</h1>
          <p>Short reads to help you understand sustainability better.</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        {articles.map((a) => (
          <a
            key={a.id}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              display: "block",
            }}
          >
            <h3 className="card-title" style={{ color: "#c084fc" }}>{a.title}</h3>
            <p className="card-subtitle">{a.description}</p>
            <p className="card-meta">Click to read article →</p>
          </a>
        ))}
      </div>

      {/* QUIZ SECTION */}
      <hr
        style={{
          margin: "40px 0",
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      />

      <div className="page-header">
        <div className="page-title-block">
          <h1>Quizzes</h1>
          <p>Test your knowledge with quick interactive eco-quizzes.</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        {quizzes.map((q) => (
          <Link
            key={q.id}
            to={`/quiz/${q.id}`}
            className="card"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(20,20,20,0.4))",
              border: "1px solid rgba(34,197,94,0.35)",
              transition: "0.25s",
              paddingBottom: "20px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,255,120,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "var(--shadow-soft)";
            }}
          >
            <h3 className="card-title" style={{ color: "#c084fc" }}>
              {q.title}
            </h3>
            <p className="card-subtitle">Difficulty: {q.difficulty}</p>
            <p className="card-meta">{q.description}</p>

            <p
              style={{
                marginTop: 12,
                fontWeight: "600",
                color: "#22c55e",
                fontSize: "14px"
              }}
            >
              Start Quiz →
            </p>
          </Link>
        ))}
      </div>

      {/* FOOTER */}
      <div className="page-footer-hint" style={{ marginTop: 20 }}>
        Future: Add quizzes, assignments & certificate tracking.
      </div>

    </div>
  );
};

export default StudentModules;
