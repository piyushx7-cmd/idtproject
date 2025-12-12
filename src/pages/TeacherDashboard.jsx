import React from "react";
import {
  demoTeacher,
  getTeacherClassSummary,
  getStudentModules,
} from "../fake-backend/data";
import DashboardCard from "../components/DashboardCard";

const TeacherDashboard = () => {
  const summary = getTeacherClassSummary();
  const modules = getStudentModules();

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title-block">
          <h1>Teacher Dashboard</h1>
          <p>
            Welcome, <strong>{demoTeacher.name}</strong>. Monitor student progress
            and module completion.
          </p>
        </div>
        <div className="page-tagline">
          Class {demoTeacher.className} · {demoTeacher.studentsCount} students
        </div>
      </div>

      <div className="grid grid-3">
        <DashboardCard
          label="Average Eco-Score"
          value={summary.averageEcoScore}
          meta="Across active learners"
        />
        <DashboardCard
          label="Active Students"
          value={summary.activeStudents}
          meta="Logged ≥1 task this week"
        />
        <DashboardCard
          label="Total Tasks Logged"
          value={summary.totalTasksLogged}
          meta="This term"
        />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">Module Overview</h3>
            <p className="card-subtitle">Current progress snapshot</p>
          </div>
        </div>

        {modules.map((m) => (
          <div key={m.id} className="list-row">
            <div>
              <div className="list-main">{m.title}</div>
              <div className="list-meta">Level: {m.level}</div>
            </div>
            <div className="list-meta">
              Status: {m.status} · {m.progress}%
            </div>
          </div>
        ))}
      </div>

      <div className="page-footer-hint">
        Future: Teacher can export reports & view individual students.
      </div>
    </div>
  );
};

export default TeacherDashboard;
