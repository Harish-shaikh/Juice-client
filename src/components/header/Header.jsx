import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <h5 className="header-detail1">JuiceShpere</h5>
          <div className="container header-detail">
            <div className="left-header-detail">
              <h5>
                <i class="fa-solid fa-location-dot"></i>
                -Boisar(E)Palghar-401501/<i class="fa-solid fa-envelope"></i>
                -hs301491@gmail.
                <i className="mdi mdi-comment-remove-outline:"></i>
              </h5>
            </div>
            <div className="right-header-detail">
              <h5>
                <i class="fa-solid fa-phone"></i>-8080641167/
                <ul>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="img-fluid logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Abouts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/juices" className="nav-link">
                  Juices
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <div className="search-icons">
                <ul className="list-inline mb-0 text-center">
                  <li className="list-inline-item">
                    <i className="fas fa-shopping-cart "></i>
                  </li>
                  <li
                    className="list-inline-item "
                    style={{ marginTop: "-1rem" }}
                  >
                    <i className="fas fa-user "></i>
                  </li>
                </ul>
              </div>

              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "3rem", marginLeft: "1rem" }}
              />

              <button
                className="btn btn-success"
                type="submit"
                style={{ height: "3rem", marginLeft: "1rem" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
