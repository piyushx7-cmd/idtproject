import React from "react";
import { Link } from "react-router-dom";

const ModuleCard = ({ module }) => {
  const { id, title, level } = module;

  return (
    <Link
      to={`/module/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card" style={{ cursor: "pointer" }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">Level: {level}</p>
          </div>
        </div>

        <p className="card-meta">Click to open module</p>
      </div>
    </Link>
  );
};

export default ModuleCard;
