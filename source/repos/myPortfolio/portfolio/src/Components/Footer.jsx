import React from 'react';

const socialLinks = [
  { href: 'https://github.com/yourusername', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/yourusername/', label: 'LinkedIn' },
  { href: 'https://stackoverflow.com/users/yourusername', label: 'Stack Overflow' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Portfolio</p>
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${link.label} profile`}>
          {link.label}
        </a>
      ))}
    </footer>
  );
};

export default Footer;