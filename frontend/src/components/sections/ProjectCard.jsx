import { Card, Tag, Button } from '../ui/index.js';
import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <div className="project-card__image-wrap">
        <img src={project.image} alt={project.name} className="project-card__image" loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__role">{project.role}</p>
        <p className="project-card__description">{project.description}</p>

        {project.impact && <p className="project-card__impact">✦ {project.impact}</p>}

        <div className="project-card__stack">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="project-card__links">
          {project.liveUrl && (
            <Button as="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="primary">
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button as="a" href={project.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
