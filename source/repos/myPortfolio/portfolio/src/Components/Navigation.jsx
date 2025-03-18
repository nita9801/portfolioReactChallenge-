import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'About Me' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' },
];

const Navigation = () => {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul>
      {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;