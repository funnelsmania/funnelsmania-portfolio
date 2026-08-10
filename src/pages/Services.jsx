import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { pageMeta } from '../data/siteConfig';

export default function Services() {
  const meta = pageMeta.services;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="Our Services"
        title="Everything You Need to Win in Ecommerce"
        description="Comprehensive Shopify development, automation, and growth services designed to help your brand thrive online."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="info-banner">
            <div className="info-banner__content">
              <h2 className="info-banner__title">Need a Custom Solution?</h2>
              <p className="info-banner__description">
                Every business is unique. We offer tailored packages that combine our services to
                match your specific goals, timeline, and budget.
              </p>
            </div>
            <Button to="/contact">Discuss Your Project</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
