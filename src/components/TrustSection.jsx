import SectionHeader from './SectionHeader';
import Button from './Button';
import { trustPrinciples, expertiseAreas } from '../data/expertise';

export default function TrustSection({ showExpertise = true }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          label="Why Work With Me"
          title="Built on Trust, Not Hype"
          description="No fabricated reviews or inflated metrics — just honest expertise, clear process, and a commitment to your results."
        />

        {showExpertise && (
          <div className="grid grid--2 expertise-grid">
            {expertiseAreas.map((area) => (
              <article key={area.title} className="expertise-card">
                <h3 className="expertise-card__title">{area.title}</h3>
                <p className="expertise-card__description">{area.description}</p>
              </article>
            ))}
          </div>
        )}

        <div className="grid grid--2 trust-grid">
          {trustPrinciples.map((item) => (
            <article key={item.title} className="trust-card">
              <h3 className="trust-card__title">{item.title}</h3>
              <p className="trust-card__description">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="section__action">
          <Button to="/testimonials" variant="secondary">
            Learn More About My Approach
          </Button>
        </div>
      </div>
    </section>
  );
}
