import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import FounderProfile from '../components/FounderProfile';
import TechStack from '../components/TechStack';
import CTASection from '../components/CTASection';
import { founder } from '../data/founder';
import { trustPrinciples } from '../data/expertise';
import { pageMeta, siteConfig } from '../data/siteConfig';

export default function About() {
  const meta = pageMeta.about;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="About"
        title={`Hi, I'm ${founder.name.split(' ')[0]}`}
        description={founder.tagline}
      />

      <section className="section">
        <div className="container">
          <FounderProfile />
        </div>
      </section>

      <TechStack title="Tools & Technologies" />

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title section-title--center">Who I Work With</h2>
          <ul className="who-i-help who-i-help--centered">
            {founder.whoIHelp.map((item) => (
              <li key={item} className="who-i-help__item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title section-title--center">How I Work</h2>
          <div className="grid grid--2">
            {trustPrinciples.map((item) => (
              <article key={item.title} className="value-card">
                <h3 className="value-card__title">{item.title}</h3>
                <p className="value-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about your Shopify store"
        description="Book a free strategy call and we'll explore how optimization and automation can help your brand."
        primaryLabel={siteConfig.primaryCta}
      />
    </>
  );
}
