import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { pageMeta } from '../data/siteConfig';

const values = [
  {
    title: 'Results Over Process',
    description:
      'We measure success by your revenue growth, conversion rates, and operational efficiency — not by hours logged.',
  },
  {
    title: 'Automation-First Thinking',
    description:
      'Manual work is a bottleneck. We design systems that run your business while you focus on strategy and growth.',
  },
  {
    title: 'Transparent Partnership',
    description:
      'No jargon, no hidden fees. We communicate clearly, set realistic expectations, and deliver on our promises.',
  },
  {
    title: 'Continuous Innovation',
    description:
      'We stay ahead of Shopify updates, AI capabilities, and automation tools so your business always has a competitive edge.',
  },
];

const teamHighlights = [
  { label: 'Shopify Experts', value: '5+ years avg. experience' },
  { label: 'Automations Built', value: '500+ workflows deployed' },
  { label: 'Industries Served', value: 'Fashion, Beauty, Health, Tech & more' },
  { label: 'Global Reach', value: 'Clients in 12+ countries' },
];

export default function About() {
  const meta = pageMeta.about;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="About Us"
        title="Modern Ecommerce & Automation Consulting"
        description="FunnelsMania helps brands grow smarter with Shopify development, N8N automation, and AI-powered business workflows."
      />

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-grid__content">
              <h2 className="about-grid__title">Who We Are</h2>
              <p className="about-grid__text">
                FunnelsMania is a specialized ecommerce consulting firm focused on helping brands
                build, optimize, and scale their online stores. We combine deep Shopify expertise
                with cutting-edge automation technology to deliver measurable growth for our clients.
              </p>
              <p className="about-grid__text">
                Founded with the belief that every ecommerce brand deserves enterprise-level tools
                and strategy, we bridge the gap between complex technology and practical business
                outcomes. Whether you are launching your first store or scaling to seven figures,
                we provide the development, automation, and strategic guidance you need.
              </p>
              <Button to="/contact">Work With Us</Button>
            </div>
            <div className="about-grid__visual">
              <div className="about-card">
                <span className="about-card__label">Our Mission</span>
                <p className="about-card__text">
                  Empower ecommerce brands to grow faster through intelligent Shopify development
                  and automation that works around the clock.
                </p>
              </div>
              <div className="about-card about-card--accent">
                <span className="about-card__label">Our Vision</span>
                <p className="about-card__text">
                  A world where every online business operates with the efficiency and intelligence
                  of a fully automated growth engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title section-title--center">Our Values</h2>
          <div className="grid grid--2">
            {values.map((value) => (
              <article key={value.title} className="value-card">
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title section-title--center">By the Numbers</h2>
          <div className="grid grid--2 grid--4-desktop">
            {teamHighlights.map((item) => (
              <div key={item.label} className="highlight-card">
                <span className="highlight-card__value">{item.value}</span>
                <span className="highlight-card__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
