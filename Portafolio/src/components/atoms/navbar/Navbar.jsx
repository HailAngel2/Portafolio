import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ links = [], logoText = 'MiPortafolio' }) => {
  return (
    <nav className="navbar p-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white flex justify-between items-center">
      <div className="navbar-logo text-xl font-bold">{logoText}</div>
      <ul className="navbar-links flex gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className="hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
