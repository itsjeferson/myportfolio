import { FiCode, FiLayers, FiTool, FiCloud } from 'react-icons/fi';
import { skills } from '../../data/skills.js';
import { Card, Tag } from '../ui/index.js';
import './Skills.css';

const ICONS = {
  code: FiCode,
  layers: FiLayers,
  tools: FiTool,
  cloud: FiCloud,
};

export const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title skills__heading">Competencies</h2>

        <div className="skills__grid">
          {skills.map((group) => {
            const Icon = ICONS[group.icon] ?? FiCode;
            return (
              <Card key={group.category} className="skills__card">
                <div className="skills__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="skills__category">{group.category}</h3>
                <div className="skills__tags">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
