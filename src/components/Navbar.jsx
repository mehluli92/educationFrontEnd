import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
             <nav className='navbar navbar-expand-lg navbar-white bg-white'>
          <div className='container-fluid'>
          <Link className='btn' to="/">Almond Tutors</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'></div>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='btn' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='btn' to="/login">Login</Link>
              </li>
              
              <li className='nav-item'>
                <Link className='btn' to="/register">Register</Link>
              </li>
            </ul>
          </div>
      </nav>
        </div>
    )
}