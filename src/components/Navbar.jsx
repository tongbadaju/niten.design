import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'about me', path: '/about' },
        { name: 'work', path: '/works' },
        { name: 'gallery', path: '/experience' },
        { name: 'contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;


    return (
        <nav className="fixed top-0 w-full bg-[var(--color-secondary)] z-50">
            <div className="flex items-center justify-between py-4 px-6 md:px-12 border-b border-gray-600 md:border-0">
                
                {/* Logo */}
                <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-white cursor-pointer"
                >
                    niten.
                </Link>

                {/* Mobile Toggle */}
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-3">
                    {navItems.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={() => setMenuOpen(false)}
                                className={`text-sm font-medium px-3 py-2 rounded cursor-pointer transition-colors duration-300 ${
                                isActive(path)
                                    ? 'text-[var(--color-primary)]'
                                    : 'text-white hover:text-[var(--color-primary)]'
                                }`}
                            >
                                {name}
                            </Link>
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
                <ul className="flex flex-col space-y-4 py-4">
                    {navItems.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                onClick={() => setMenuOpen(false)}
                                className={`w-full block text-sm font-medium px-3 py-2 rounded transition-colors ${
                                isActive(path)
                                    ? 'text-white bg-[var(--color-primary)]'
                                    : 'text-white hover:bg-gray-700'
                                }`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
