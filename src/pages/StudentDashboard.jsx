import React from "react";
import DashboardCard from "../components/DashboardCard";
import ProgressBar from "../components/ProgressBar";
import { demoStudent, getStudentModules } from "../fake-backend/data";
import ModuleCard from "../components/ModuleCard";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const modules = getStudentModules();
  const active = modules.filter((m) => m.status === "in-progress");
  const completed = modules.filter((m) => m.status === "completed");

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title-block">
          <h1>Student Dashboard</h1>
          <p>
            Welcome back, <strong>{demoStudent.name}</strong>. Track your Eco-Score,
            habits, and modules.
          </p>
        </div>
        <div className="page-tagline">
          <span className="badge badge-primary">Demo View</span>
        </div>
      </div>

      <div className="grid grid-3">
        <DashboardCard
          label="Eco-Score (This Week)"
          value={demoStudent.ecoScore}
          meta="Consistent eco-habits increase score"
        />
        <DashboardCard
          label="Habits Tracked"
          value={demoStudent.habitsTracked}
          meta="Last 7 days"
        />
        <DashboardCard
          label="CO₂ Saved"
          value={`${demoStudent.co2SavedKg} kg`}
          meta="Estimated impact"
        />
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Current Focus Module</h3>
            <p className="card-subtitle">
              Keep your streak alive by completing daily tasks.
            </p>
          </div>
          <Link to="/student/modules">
            <button className="btn btn-ghost">View all modules</button>
          </Link>
        </div>

        {active.length > 0 ? (
          <>
            <p className="card-meta">
              Active: <strong>{active.length}</strong> · Completed:{" "}
              <strong>{completed.length}</strong>
            </p>
            <ProgressBar value={active[0].progress} />
          </>
        ) : (
          <p className="card-meta">No active modules.</p>
        )}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Eco-Tasks</h3>
          </div>

          <div className="list-row">
            <div className="list-main">Used cloth bag</div>
            <div className="list-meta">+5 points · Yesterday</div>
          </div>
          <div className="list-row">
            <div className="list-main">Turned off fans</div>
            <div className="list-meta">+3 points · Today</div>
          </div>
          <div className="list-row">
            <div className="list-main">Refillable bottle</div>
            <div className="list-meta">+4 points · Today</div>
          </div>

          <p className="info-text" style={{ marginTop: 6 }}>
            In a real app, students log tasks themselves.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Suggestions</h3>
          </div>
          <ul className="tag-list">
            <li className="tag">Try "no plastic" challenge</li>
            <li className="tag">Reduce shower time</li>
            <li className="tag">Plant a sapling</li>
            <li className="tag">Make a climate poster</li>
          </ul>
        </div>
      </div>

      <div className="page-footer-hint">
        Future: Students log tasks → backend updates score.
      </div>
    </div>
  );
};

export default StudentDashboard;
