import React from 'react'
import {  Link } from "react-router-dom";
import "./css/Navbar.css";

function NavBar() {
  return (
    <div className='nav-container'>
      <ul>
        <li className='nav-item'>
          <Link className='nav-text' to="/">Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-text' to="/rides">Rides</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-text' to="/visit">Visit</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-text' to="/itenary">Itenary</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-text' to="/book">Book A Stay</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
