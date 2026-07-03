import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { profile } from '../../data/profile.js';
import { Button } from '../ui/index.js';
import './Hero.css';

const nameParts = profile.name.trim().split(' ');
const lastName = nameParts.pop();
const firstNames = nameParts.join(' ');
const shortRole = profile.title.split(' ')[0];

const CODE_LINES = [
  { tokens: [{ t: 'const', c: 'kw' }, { t: ' dev ', c: 'plain' }, { t: '=', c: 'plain' }, { t: ' {', c: 'plain' }] },
  { tokens: [{ t: '  name', c: 'key' }, { t: ': ', c: 'plain' }, { t: `'${profile.name}',`, c: 'str' }] },
  { tokens: [{ t: '  role', c: 'key' }, { t: ': ', c: 'plain' }, { t: `'${shortRole}',`, c: 'str' }] },
  { tokens: [{ t: '  focus', c: 'key' }, { t: ': ', c: 'plain' }, { t: `'${profile.focus}'`, c: 'str' }] },
  { tokens: [{ t: '};', c: 'plain' }] },
];

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__intro">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dash" aria-hidden="true" />
            {profile.title}
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line">{firstNames}</span>
            <span className="hero__title-line hero__title-line--accent">{lastName}</span>
          </h1>
        </div>

        <div
          className="hero__code"
          role="img"
          aria-label={`Code preview: name ${profile.name}, role ${shortRole}, focus ${profile.focus}`}
        >
          <div className="hero__code-header">
            <div className="hero__code-dots">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
            </div>
            <span className="hero__code-filename">main.ts — MJM.DEV</span>
          </div>
          <div className="hero__code-body">
            {CODE_LINES.map((line, i) => (
              <div className="hero__code-line" key={i}>
                <span className="hero__code-lineno">{String(i + 1).padStart(2, '0')}</span>
                <span className="hero__code-content">
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={`hero__code-tok hero__code-tok--${tok.c}`}>
                      {tok.t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__actions">
          <div className="hero__cta">
            <Button as="a" href="#projects" variant="primary" className="hero__cta-btn">
              Explore Projects <FiArrowRight aria-hidden="true" />
            </Button>
            <Button as="a" href="#contact" variant="secondary" className="hero__cta-btn">
              Get In Touch
            </Button>
          </div>

          <a href={profile.resumeUrl} className="hero__resume" download>
            <FiDownload aria-hidden="true" /> Get Resume
          </a>
        </div>
      </div>
    </section>
  );
};
