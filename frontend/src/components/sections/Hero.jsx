import { profile } from '../../data/profile.js';
import { Button } from '../ui/index.js';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I'm {profile.name}</p>
          <h1 className="hero__title">{profile.title}</h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <Button as="a" href="#projects" variant="primary">
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <p className="hero__availability">
            <span className="hero__status-dot" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        <div className="hero__photo-wrap">
          <img src={profile.photo} alt={profile.name} className="hero__photo" />
        </div>
      </div>
    </section>
  );
};
