import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/projects.js';
import { ProjectCard } from './ProjectCard.jsx';
import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title-row">
          <h2 className="section-title">Selected Work</h2>
          <a href="#projects" className="section-title-action">
            View All <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
