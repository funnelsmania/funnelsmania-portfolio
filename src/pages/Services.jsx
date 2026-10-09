import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import HowIHelp from '../components/HowIHelp';
import { allServices } from '../data/services';
import { pageMeta, siteConfig } from '../data/siteConfig';

export default function Services() {
  const meta = pageMeta.services;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="Services"
        title="Shopify + AI + Growth"
        description="Focused services designed to optimize your store, automate operations, and build systems that scale."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      <HowIHelp />

      <section className="section section--alt">
        <div className="container">
          <div className="info-banner">
            <div className="info-banner__content">
              <h2 className="info-banner__title">Need a Custom Approach?</h2>
              <p className="info-banner__description">
                Every Shopify store is different. Book a strategy call and I'll recommend the
                right combination of services for your specific goals and budget.
              </p>
            </div>
            <Button to="/contact">{siteConfig.primaryCta}</Button>
          </div>
        </div>
      </section>

      <CTASection primaryLabel={siteConfig.primaryCta} />
    </>
  );
}
