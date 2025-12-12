import React from "react";

const ProgressBar = ({ value }) => {
  const clamped = Math.max(0, Math.min(100, value ?? 0));

  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <span>Progress</span>
        <span>{clamped}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-bar"
          style={{ width: `${clamped}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
