import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../fake-backend/data";

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save login in local storage to avoid redirecting back
    const user = fakeLogin(name.trim());
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/student/modules", { replace: true });  // ✅ FIXED ROUTE
  };

  return (
    <div className="page" style={{ marginTop: "20px" }}>
      <div className="page-header">
        <div className="page-title-block">
          <h1>Virtual Green Education Platform</h1>
          <p>Interactive learning modules on sustainability.</p>
        </div>
      </div>

      <div className="card form-card" style={{ marginTop: "30px" }}>
        <h2 className="card-title">Continue as Student</h2>
        <p className="card-subtitle">Enter your name (optional) to begin.</p>

        <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              className="form-input"
              placeholder="Type your name or leave blank"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
