import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StudentModules from "./pages/StudentModules";
import ModulePage from "./pages/ModulePage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Student dashboard */}
          <Route path="/student" element={<StudentDashboard />} />

          {/* Student modules */}
          <Route path="/student/modules" element={<StudentModules />} />

          {/* Individual module page */}
          <Route path="/module/:id" element={<ModulePage />} />

          {/* Quiz page */}
          <Route path="/quiz/:id" element={<QuizPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
