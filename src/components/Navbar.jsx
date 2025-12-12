import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav modern-nav">
      <div className="nav-inner modern-inner">

        {/* Logo */}
        <Link to="/modules" className="nav-logo">

          <span className="nav-logo-mark modern-logo-mark">VG</span>
          VIRTUAL GREEN EDUCATION
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
