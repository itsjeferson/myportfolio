import { useState } from 'react';
import { profile } from '../../data/profile.js';
import { NAV_LINKS } from '../../utils/navigation.js';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import './Navbar.css';

const sectionIds = NAV_LINKS.map((link) => link.id);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand" onClick={handleLinkClick}>
          {profile.name}
        </a>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            type="button"
            className="navbar__menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
