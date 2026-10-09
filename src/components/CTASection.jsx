import Button from './Button';

export default function CTASection({
  title = 'Ready to optimize and automate your Shopify store?',
  description = 'Book a free strategy call and discover how Shopify optimization and AI automation can help your brand scale.',
  primaryLabel = 'Book a Free Strategy Call',
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
