import SectionHeader from './SectionHeader';
import { workingProcess } from '../data/expertise';

export default function HowIHelp() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          label="How I Help"
          title="A Clear Path from Audit to Scale"
          description="Every engagement follows a focused three-step process designed to deliver practical, measurable improvements."
        />
        <div className="how-i-help">
          {workingProcess.map((step, index) => (
            <article key={step.step} className="how-i-help__step">
              <span className="how-i-help__number">{step.step}</span>
              <h3 className="how-i-help__title">{step.title}</h3>
              <p className="how-i-help__description">{step.description}</p>
              {index < workingProcess.length - 1 && (
                <span className="how-i-help__arrow" aria-hidden="true">
                  →
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
