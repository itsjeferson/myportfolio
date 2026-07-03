import { profile } from '../../data/profile.js';
import { NAV_LINKS } from '../../utils/navigation.js';
import './Footer.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {profile.name}. All rights reserved.
        </p>

        <nav className="footer__links">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.email}>Email</a>
        </div>
      </div>
    </footer>
  );
};
