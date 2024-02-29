import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark opacity-75 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Developer Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-black" href="about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="tools">Tools</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
