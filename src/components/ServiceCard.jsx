import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service, variant = 'default' }) {
  const features = service.helpWith || service.features;

  return (
    <article className={`service-card service-card--${variant}`}>
      <ServiceIcon name={service.icon} />
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      {features && (
        <div className="service-card__help">
          <span className="service-card__help-label">What I can help with</span>
          <ul className="service-card__features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
