import { projects } from '../../data/projects.js';
import { SectionHeading } from '../ui/index.js';
import { ProjectCard } from './ProjectCard.jsx';
import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of projects that best show how I think, build, and ship."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
