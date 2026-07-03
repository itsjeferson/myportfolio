import { profile } from '../../data/profile.js';
import { SectionHeading, Button } from '../ui/index.js';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="about__content">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="about__paragraph">
              {paragraph}
            </p>
          ))}

          <div className="about__meta">
            <div>
              <span className="about__meta-label">Location</span>
              <span className="about__meta-value">{profile.location}</span>
            </div>
            <div>
              <span className="about__meta-label">Timezone</span>
              <span className="about__meta-value">{profile.timezone}</span>
            </div>
          </div>

          <Button as="a" href={profile.resumeUrl} variant="secondary" download>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};
