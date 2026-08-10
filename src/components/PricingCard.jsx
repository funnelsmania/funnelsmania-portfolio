import Button from './Button';

export default function PricingCard({ tier }) {
  return (
    <article className={`pricing-card ${tier.popular ? 'pricing-card--popular' : ''}`}>
      {tier.popular && <span className="pricing-card__badge">Most Popular</span>}
      <h3 className="pricing-card__name">{tier.name}</h3>
      <p className="pricing-card__description">{tier.description}</p>
      <div className="pricing-card__price">
        <span className="pricing-card__amount">{tier.price}</span>
        <span className="pricing-card__period">{tier.period}</span>
      </div>
      <ul className="pricing-card__features">
        {tier.features.map((feature) => (
          <li key={feature}>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        to="/contact"
        variant={tier.popular ? 'primary' : 'outline'}
        className="pricing-card__cta"
      >
        {tier.cta}
      </Button>
    </article>
  );
}
