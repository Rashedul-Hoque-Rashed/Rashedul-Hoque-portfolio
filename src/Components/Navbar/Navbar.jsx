// Navbar.js

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Assuming you want to use the FiMenu icon
import PropTypes from 'prop-types';

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      isActive ? 'text-teal-300 font-bold font-roboto' : 'text-white font-semibold font-roboto'
    }
  >
    {label}
  </NavLink>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl font-oswald">Your Name</div>
        <div className="hidden md:flex space-x-4">
          <NavItem to="/" label="Home" onClick={closeMenu} />
          <NavItem to="/about" label="About" onClick={closeMenu} />
          <NavItem to="/portfolio" label="Portfolio" onClick={closeMenu} />
          <NavItem to="/contact" label="Contact" onClick={closeMenu} />
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute right-4 top-14 pb-6 px-10 bg-gray-800 rounded-b-xl">
          <div className="flex flex-col items-center mt-2 space-y-2">
            <NavItem to="/" label="Home" onClick={closeMenu} />
            <NavItem to="/about" label="About" onClick={closeMenu} />
            <NavItem to="/portfolio" label="Portfolio" onClick={closeMenu} />
            <NavItem to="/contact" label="Contact" onClick={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Navbar;
