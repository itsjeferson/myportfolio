import { skills } from '../../data/skills.js';
import { SectionHeading, Card, Tag } from '../ui/index.js';
import './Skills.css';

export const Skills = () => {
  return (
    <section id="skills" className="section section--alt skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="Grouped by category rather than arbitrary percentages — a more honest signal of real-world capability."
        />

        <div className="skills__grid">
          {skills.map((group) => (
            <Card key={group.category} className="skills__card">
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
