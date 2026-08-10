import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { testimonials } from '../data/testimonials';
import { pageMeta } from '../data/siteConfig';

export default function TestimonialsPage() {
  const meta = pageMeta.testimonials;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="Testimonials"
        title="What Our Clients Say"
        description="Real results from real brands. Discover how FunnelsMania has helped ecommerce businesses grow and automate."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="stats-banner">
            <div className="stats-banner__item">
              <span className="stats-banner__value">150+</span>
              <span className="stats-banner__label">Projects Delivered</span>
            </div>
            <div className="stats-banner__item">
              <span className="stats-banner__value">98%</span>
              <span className="stats-banner__label">Client Retention</span>
            </div>
            <div className="stats-banner__item">
              <span className="stats-banner__value">4.9/5</span>
              <span className="stats-banner__label">Average Rating</span>
            </div>
            <div className="stats-banner__item">
              <span className="stats-banner__value">40%</span>
              <span className="stats-banner__label">Avg. Conversion Lift</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to become our next success story?"
        description="Join the growing list of brands that trust FunnelsMania for Shopify development and automation."
      />
    </>
  );
}
