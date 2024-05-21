import React from "react";
import { Link } from "react-router-dom";
import "./styles/general.css";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
          <div className="icon-container">
            <span className="material-symbols-outlined">library_books</span>
            <div className="icon-name">Library</div>
          </div>
        </Link>

      <Link to="/explore" style={{ textDecoration: "none", color: "inherit"}}>
        <div className="icon-container">
          <span className="material-symbols-outlined">explore</span>
          <div className="icon-name">Explore</div>
        </div>
      </Link>

        <div className="icon-container">
          <span className="material-symbols-outlined">
            local_fire_department
          </span>
          <div className="icon-name">Popular</div>
        </div>

        <Link to="/updates" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="icon-container">
            <span className="material-symbols-outlined">
              circle_notifications
            </span>
            <div className="icon-name">Updates</div>
          </div>
        </Link>

        <div className="icon-container">
          <span className="material-symbols-outlined">settings</span>
          <div className="icon-name">Settings</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
