import React from 'react';
import logo from '../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <span>00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
