import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page" style={{ textAlign: "center", paddingTop: "120px" }}>
      <h1>Virtual Green Education</h1>
      <p>A learning platform for sustainability</p>

      <Link to="/login">
        <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
