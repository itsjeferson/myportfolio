import { useState } from 'react';
import { FiMenu, FiX, FiTerminal } from 'react-icons/fi';
import { NAV_LINKS } from '../../utils/navigation.js';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';
import './Navbar.css';

const sectionIds = NAV_LINKS.map((link) => link.id);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button
          type="button"
          className="navbar__menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <a href="#hero" className="navbar__brand" onClick={handleLinkClick}>
          MJM<span className="navbar__brand-dot">.</span>DEV
        </a>

        <nav className="navbar__links">
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

        <a href="#contact" className="navbar__icon-btn" aria-label="Jump to contact">
          <FiTerminal />
        </a>
      </div>

      <nav className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`navbar__mobile-link ${activeId === link.id ? 'navbar__mobile-link--active' : ''}`}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
