import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import HowIHelp from '../components/HowIHelp';
import TechStack from '../components/TechStack';
import { trustPrinciples, expertiseAreas } from '../data/expertise';
import { founder } from '../data/founder';
import { pageMeta, siteConfig } from '../data/siteConfig';

export default function TestimonialsPage() {
  const meta = pageMeta.testimonials;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="Why Work With Me"
        title="Trust Built on Expertise, Not Testimonials"
        description="I believe in earning trust through honest work, clear communication, and real results — not fabricated reviews."
      />

      <section className="section">
        <div className="container">
          <div className="honest-note">
            <p>
              Client testimonials will be added here as projects are completed and clients choose
              to share their experience. In the meantime, here is what you can expect when working
              with {founder.name} and FunnelsMania.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title section-title--center">Areas of Expertise</h2>
          <div className="grid grid--2">
            {expertiseAreas.map((area) => (
              <article key={area.title} className="expertise-card">
                <h3 className="expertise-card__title">{area.title}</h3>
                <p className="expertise-card__description">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HowIHelp />

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title section-title--center">What You Can Expect</h2>
          <div className="grid grid--2">
            {trustPrinciples.map((item) => (
              <article key={item.title} className="trust-card">
                <h3 className="trust-card__title">{item.title}</h3>
                <p className="trust-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <CTASection
        title="Ready to start with a conversation?"
        description="Book a free strategy call — no pressure, no sales pitch. Just an honest discussion about your store and goals."
        primaryLabel={siteConfig.primaryCta}
      />
    </>
  );
}
