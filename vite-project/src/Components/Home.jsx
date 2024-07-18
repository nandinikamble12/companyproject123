import React from 'react';
import logo from '../assets/pro.jpg.png';
import logo1 from '../assets/profile.jpg.png';


function Navbar() {
 
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  style={{ color: 'black' }}>
      <div className="container-fluid" style={{ backgroundColor: '#1B84FF' }}>
        <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" style={{ height: '60px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-danger me-2">Upgrade to Pro</button>
            <a className="nav-link" href="#">
            <img src={logo1} alt="Logo" style={{ height: '60px' }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    
    </>
  );
}

export default Navbar;
