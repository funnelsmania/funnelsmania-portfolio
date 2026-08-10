import Button from './Button';

export default function CTASection({
  title = 'Ready to grow your ecommerce business?',
  description = 'Book a free consultation and discover how FunnelsMania can transform your Shopify store and automate your workflows.',
  primaryLabel = 'Book a Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'View Pricing',
  secondaryTo = '/pricing',
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__description">{description}</p>
          <div className="cta-section__actions">
            <Button to={primaryTo}>{primaryLabel}</Button>
            {secondaryLabel && (
              <Button to={secondaryTo} variant="outline">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
