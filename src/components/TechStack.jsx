import { technologies } from '../data/expertise';

export default function TechStack({ title = 'Technologies I Work With' }) {
  return (
    <section className="tech-stack">
      <div className="container">
        <p className="tech-stack__title">{title}</p>
        <ul className="tech-stack__list">
          {technologies.map((tech) => (
            <li key={tech} className="tech-stack__item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
