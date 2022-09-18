import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './styles/Header.css';
import { navLinks } from './data';

const Header = () => {
  const NavBars = navLinks.map((nav) => (
    <NavHashLink
      to={nav.path}
      className={nav.className}
      key={nav.id}
      smooth
    >
      {nav.name}
    </NavHashLink>
  ));
  return (
    <header className="header">
      <Link
        className="logo"
        to="/"
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
