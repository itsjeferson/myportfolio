import { experience } from '../../data/experience.js';
import { projects } from '../../data/projects.js';
import { profile } from '../../data/profile.js';
import { SectionHeading, Tag, Button } from '../ui/index.js';
import './Experience.css';

const getProjectNames = (ids = []) =>
  ids
    .map((id) => projects.find((project) => project.id === id)?.name)
    .filter(Boolean);

export const Experience = () => {
  return (
    <section id="experience" className="section section--alt experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Work history"
          description="Roles and engagements, each tied to the project work above."
        />

        <ol className="experience__timeline">
          {experience.map((item) => (
            <li key={item.id} className="experience__item">
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__content">
                <div className="experience__header">
                  <h3 className="experience__role">{item.role}</h3>
                  <span className="experience__dates">
                    {item.startDate} – {item.endDate}
                  </span>
                </div>
                <p className="experience__company">{item.company}</p>
                <p className="experience__impact">{item.impact}</p>

                {getProjectNames(item.relatedProjectIds).length > 0 && (
                  <div className="experience__related">
                    {getProjectNames(item.relatedProjectIds).map((name) => (
                      <Tag key={name}>{name}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
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
