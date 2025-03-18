import React from 'react';
import Navigation from './Navigation';

const Header = ({ title }) => {
  return (
    <header className="header" aria-label="Site header">
      <h1>{title}</h1>
      <Navigation />
    </header>
  );
};

Header.defaultProps = {
  title: 'My Portfolio',
};

export default Header;