import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

    
const Navbar = () => {
  return (
    <div>
      <nav className="navbar custom-navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
