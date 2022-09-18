import React from "react";
import "./style.css";
import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light bold" href="#">
            <b>NEWS</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink to="/" className="heading text-light bold">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Latest" className="heading text-light bold">
                  Latest
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Entertainment"
                  className="heading text-light bold"
                >
                  Entertainment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
};
export default Header;
