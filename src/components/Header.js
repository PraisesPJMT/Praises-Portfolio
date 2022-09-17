import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const Navigation = [
    {
      id: 1,
      name: 'Portfolio',
      path: '#profile',
      className: 'nav-home nav-link',
    },
    {
      id: 2,
      name: 'About',
      path: '#about',
      className: 'nav-about nav-link',
    },
    {
      id: 3,
      name: 'Contact',
      path: '#contact',
      className: 'nav-contact nav-link',
    },
  ];
  const NavBars = Navigation.map((nav) => (
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
