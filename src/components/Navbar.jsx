import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'about me', path: '/about' },
    { name: 'work', path: '#works', scroll: true },
    { name: 'gallery', path: '/gallery' },
    { name: 'contact', path: '/contact' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  const handleNavClick = ({ path, scroll }) => {
    setMenuOpen(false);
    if (scroll) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => handleScroll(path.replace('#', '')), 100);
      } else {
        handleScroll(path.replace('#', ''));
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--color-secondary)] z-50">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-screen border-b border-gray-600 md:border-0">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg md:text-xl font-semibold text-white cursor-pointer"
        >
          niten.design
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-3">
          {navItems.map(({ name, path, scroll }) => (
            <li className="flex items-center" key={name}>
              {scroll ? (
                <button
                  onClick={() => handleNavClick({ path, scroll })}
                  className="text-sm font-medium px-3 py-2 rounded cursor-pointer text-white hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  {name}
                </button>
              ) : (
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium px-3 py-2 rounded cursor-pointer text-white hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[var(--color-secondary)] backdrop-blur-lg px-6`}
      >
        <ul className="flex flex-col space-y-2 py-4">
          {navItems.map(({ name, path, scroll }) => (
            <li key={name}>
              {scroll ? (
                <button
                  onClick={() => handleNavClick({ path, scroll })}
                  className="w-full text-left block text-sm font-medium px-3 py-2 rounded text-white hover:bg-gray-700 transition-colors"
                >
                  {name}
                </button>
              ) : (
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="w-full block text-sm font-medium px-3 py-2 rounded text-white hover:bg-gray-700 transition-colors"
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
