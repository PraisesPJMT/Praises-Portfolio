import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css';
import { navLinks } from './data';

const Header = () => {
  const NavBars = navLinks.map((nav) => (
    <NavLink
      to={nav.path}
      className={nav.className}
      key={nav.id}
    >
      {nav.name}
    </NavLink>
  ));
  return (
    <header className="header">
      <Link
        className="logo"
        to="#profile"
      >
        <h2>
          Praises Tula
        </h2>
      </Link>
      <span className="available">
        Now available
      </span>
      <nav className="nav">
        { NavBars }
      </nav>
    </header>
  );
};

export default Header;
