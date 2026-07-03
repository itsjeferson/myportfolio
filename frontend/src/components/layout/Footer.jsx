import { profile } from '../../data/profile.js';
import './Footer.css';

const SOCIALS = [
  { label: 'GH', href: profile.socials.github },
  { label: 'LI', href: profile.socials.linkedin },
  { label: 'TW', href: profile.socials.twitter },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{profile.name}</p>
        <span className="footer__rule" aria-hidden="true" />

        <nav className="footer__socials">
          {SOCIALS.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {year} Built with precision &amp; <span className="footer__highlight">performance</span>.
        </p>
      </div>
    </footer>
  );
};
