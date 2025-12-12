import React from "react";

const DashboardCard = ({ label, value, meta }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <p className="card-subtitle">{label}</p>
          <h3 className="card-title">{value}</h3>
        </div>
        {meta && <span className="card-meta">{meta}</span>}
      </div>
    </div>
  );
};

export default DashboardCard;
