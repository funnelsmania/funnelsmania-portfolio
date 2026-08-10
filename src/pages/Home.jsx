import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PricingCard from '../components/PricingCard';
import CTASection from '../components/CTASection';
import { services, processSteps, whyChooseUs } from '../data/services';
import { pricingTiers } from '../data/pricing';
import { testimonials } from '../data/testimonials';
import { pageMeta } from '../data/siteConfig';

export default function Home() {
  const meta = pageMeta.home;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge">Shopify Development & Automation Experts</span>
            <h1 className="hero__title">
              Build, Automate &amp; Scale Your{' '}
              <span className="text-gradient">Ecommerce Empire</span>
            </h1>
            <p className="hero__description">
              FunnelsMania helps brands launch high-converting Shopify stores, automate workflows
              with N8N and AI, and grow revenue with data-driven ecommerce strategy.
            </p>
            <div className="hero__actions">
              <Button to="/contact">Start Your Project</Button>
              <Button to="/services" variant="outline">
                Explore Services
              </Button>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">150+</span>
                <span className="hero__stat-label">Stores Built</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">98%</span>
                <span className="hero__stat-label">Client Satisfaction</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">40%</span>
                <span className="hero__stat-label">Avg. Conversion Lift</span>
              </div>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card hero__card--1">
              <span className="hero__card-label">Conversion Rate</span>
              <span className="hero__card-value">+34%</span>
            </div>
            <div className="hero__card hero__card--2">
              <span className="hero__card-label">Automations Active</span>
              <span className="hero__card-value">12 Flows</span>
            </div>
            <div className="hero__card hero__card--3">
              <span className="hero__card-label">Revenue Growth</span>
              <span className="hero__card-value">2.4x</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="What We Do"
            title="Services Built for Ecommerce Growth"
            description="From Shopify store setup to AI-powered automation, we deliver end-to-end solutions that drive real results."
          />
          <div className="grid grid--3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="section__action">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            label="Why FunnelsMania"
            title="Your Partner in Ecommerce Excellence"
            description="We combine Shopify expertise with cutting-edge automation to help brands work smarter and sell more."
          />
          <div className="grid grid--2 grid--4-desktop">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="feature-card">
                <div className="feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Our Process"
            title="From Discovery to Scale"
            description="A proven four-step framework that takes your ecommerce business from concept to sustained growth."
          />
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.step} className="process-step">
                <span className="process-step__number">{step.step}</span>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <span className="process-step__connector" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            label="Client Stories"
            title="Trusted by Growing Brands"
            description="See how ecommerce businesses like yours have transformed with FunnelsMania."
          />
          <div className="grid grid--3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="section__action">
            <Button to="/testimonials" variant="secondary">
              Read All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Pricing"
            title="Plans That Match Your Stage"
            description="Transparent pricing with no hidden fees. Choose the plan that fits your business goals."
          />
          <div className="grid grid--3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
          <div className="section__action">
            <Button to="/pricing" variant="secondary">
              Compare All Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection />
    </>
  );
}
