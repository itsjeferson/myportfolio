import { Tag } from '../ui/index.js';
import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  const content = (
    <>
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-card__blob" />
        <span className="project-card__pulse" />
        <div className="project-card__chart">
          {[42, 68, 50, 88, 60, 76, 46].map((h, i) => (
            <span key={i} className="project-card__bar" style={{ '--h': `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__stack">
          {project.techStack.map((tech) => (
            <Tag key={tech} dot>
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </>
  );

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="card project-card"
      >
        {content}
      </a>
    );
  }

  return <div className="card project-card">{content}</div>;
};
