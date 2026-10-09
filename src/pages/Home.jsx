import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import PricingCard from '../components/PricingCard';
import CTASection from '../components/CTASection';
import FounderProfile from '../components/FounderProfile';
import HowIHelp from '../components/HowIHelp';
import TechStack from '../components/TechStack';
import TrustSection from '../components/TrustSection';
import { coreServices, whyChooseUs } from '../data/services';
import { pricingTiers } from '../data/pricing';
import { founder } from '../data/founder';
import { pageMeta, siteConfig } from '../data/siteConfig';

export default function Home() {
  const meta = pageMeta.home;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid-pattern" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge">
              {siteConfig.founderName} · {siteConfig.founderTitle}
            </span>
            <h1 className="hero__title">
              Scale Your Shopify Brand with{' '}
              <span className="text-gradient">AI &amp; Automation</span>
            </h1>
            <p className="hero__description">
              I help ecommerce brands optimize Shopify, automate repetitive operations with AI,
              and build scalable systems that save time and drive growth.
            </p>
            <div className="hero__actions">
              <Button to="/contact">{siteConfig.primaryCta}</Button>
              <Button to="/services" variant="outline">
                Explore Services
              </Button>
            </div>
            <ul className="hero__pills" aria-label="Areas of focus">
              <li>Shopify Optimization</li>
              <li>AI Workflows</li>
              <li>n8n Automation</li>
              <li>Growth Consulting</li>
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__panel">
              <div className="hero__panel-header">
                <span className="hero__panel-dot hero__panel-dot--green" />
                <span className="hero__panel-dot hero__panel-dot--yellow" />
                <span className="hero__panel-dot hero__panel-dot--red" />
                <span className="hero__panel-label">Automation Workflow</span>
              </div>
              <div className="hero__workflow">
                <div className="hero__node">
                  <span className="hero__node-icon hero__node-icon--shopify">S</span>
                  <span className="hero__node-label">Shopify Order</span>
                </div>
                <span className="hero__connector" />
                <div className="hero__node hero__node--accent">
                  <span className="hero__node-icon hero__node-icon--n8n">n8</span>
                  <span className="hero__node-label">n8n Trigger</span>
                </div>
                <span className="hero__connector" />
                <div className="hero__node">
                  <span className="hero__node-icon hero__node-icon--ai">AI</span>
                  <span className="hero__node-label">AI Processing</span>
                </div>
                <span className="hero__connector" />
                <div className="hero__node">
                  <span className="hero__node-icon hero__node-icon--crm">→</span>
                  <span className="hero__node-label">CRM + Email</span>
                </div>
              </div>
              <div className="hero__panel-footer">
                <span className="hero__status">
                  <span className="hero__status-dot" />
                  3 automations running
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Services"
            title="How I Help Shopify Brands Grow"
            description="Focused services that combine Shopify expertise with AI automation and growth strategy."
          />
          <div className="grid grid--2 grid--4-desktop">
            {coreServices.map((service) => (
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

      {/* Who I Help */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            label="Who I Help"
            title="Built for Ecommerce Founders & Teams"
            description="If your Shopify store is growing but your operations aren't keeping up, I can help."
          />
          <ul className="who-i-help">
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

      {/* Why Choose */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Why FunnelsMania"
            title="A Consultant Who Gets Both Tech & Business"
            description="Founder-led consulting with deep Shopify and automation expertise — no agency overhead."
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

      <HowIHelp />

      <FounderProfile variant="compact" />

      <TrustSection />

      {/* Pricing Preview */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Pricing"
            title="Transparent Plans for Every Stage"
            description="Clear pricing with defined deliverables. No hidden fees, no surprises."
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

      <CTASection
        title="Ready to optimize and automate your Shopify store?"
        description="Book a free strategy call and let's discuss how AI and automation can help your brand scale."
        primaryLabel={siteConfig.primaryCta}
      />
    </>
  );
}
