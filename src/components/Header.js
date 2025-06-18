import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="border-bottom">
      {/* Top Header */}
      <div className="container-fluid py-2 d-flex justify-content-between align-items-center">
        {/* Left Side - Logo & Search */}
        <div className="d-flex align-items-center gap-3">
          <img src={Logo} alt="Logo" height={50} />
          <input
            type="text"
            className="form-control"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            style={{ width: "400px" }}
          />
        </div>

        {/* Right Side - Location & Auth/Profile */}
        <div className="d-flex align-items-center gap-3">
          <select className="form-select" style={{ width: "150px" }}>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>

          {!isLoggedIn ? (
            <>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <div className="dropdown">
              <button
                className="btn btn-light rounded-circle dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-person-fill"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item">Profile</button>
                </li>
                <li>
                  <button className="dropdown-item">Settings</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={()=>navigate('/my-tickets')}>My Tickets</button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Header */}
      <div className="container-fluid bg-light py-2">
        <div className="d-flex justify-content-between">
          {/* Left Menu Links */}
          <div className="d-flex gap-4">
            <Link to="/movies" className="text-decoration-none text-dark">
              Movies
            </Link>
            <Link to="/streams" className="text-decoration-none text-dark">
              Stream
            </Link>
            <Link to="/events" className="text-decoration-none text-dark">
              Events
            </Link>
            <Link to="/plays" className="text-decoration-none text-dark">
              Plays
            </Link>
            <Link to="/sports" className="text-decoration-none text-dark">
              Sports
            </Link>
          </div>

          {/* Right Menu Links */}
          <div className="d-flex gap-4">
            <Link to="/buzz" className="text-decoration-none text-dark">
              Buzz
            </Link>
            <Link to="/corporates" className="text-decoration-none text-dark">
              Corporates
            </Link>
            <Link to="/offers" className="text-decoration-none text-dark">
              Offers
            </Link>
            <Link to="/gifts" className="text-decoration-none text-dark">
              Gift Cards
            </Link>
            <Link to="/help" className="text-decoration-none text-dark">
              Help
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
