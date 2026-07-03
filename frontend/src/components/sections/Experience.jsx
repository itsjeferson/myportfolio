import { experience } from '../../data/experience.js';
import { profile } from '../../data/profile.js';
import { Button } from '../ui/index.js';
import './Experience.css';

export const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title experience__heading">Professional Journey</h2>

        <ol className="experience__timeline">
          {experience.map((item) => {
            const isCurrent = item.endDate.toLowerCase() === 'present';
            return (
              <li key={item.id} className="experience__item">
                <div
                  className={`experience__marker ${isCurrent ? 'experience__marker--active' : ''}`}
                  aria-hidden="true"
                />
                <div className="experience__content">
                  <span className="experience__dates">
                    {item.startDate} &ndash;{' '}
                    <span className={isCurrent ? 'experience__dates--current' : ''}>
                      {item.endDate.toUpperCase()}
                    </span>
                  </span>
                  <h3 className="experience__role">{item.role}</h3>
                  <p className="experience__company">{item.company}</p>
                  {item.impact && <p className="experience__impact">{item.impact}</p>}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="experience__resume-cta">
          <Button as="a" href={profile.resumeUrl} variant="secondary" download>
            Download full résumé/CV
          </Button>
        </div>
      </div>
    </section>
  );
};
