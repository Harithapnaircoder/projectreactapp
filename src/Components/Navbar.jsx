import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#673AB7' }}>
      <div className="container d-flex align-items-center">
        <Link to="/" className={`navbar-brand d-flex align-items-center ${location.pathname === '/' ? 'active' : ''}`} style={{ color: 'white', textDecoration: 'none' }}>
          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
            <img src={logo} alt="Logo" width="50" height="50" style={{ borderRadius: '50%' }} />
          </div>
          <span className="text-white" style={{ marginLeft: '10px' }}><i>Technologent</i></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" style={{ color: 'white', fontSize: '16px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login" style={{ color: 'white', fontSize: '16px' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} to="/signup" style={{ color: 'white', fontSize: '16px' }}>SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/emp-form' ? 'active' : ''}`} to="/emp-form" style={{ color: 'white', fontSize: '16px' }}>Employee Form</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;