import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service, variant = 'default' }) {
  return (
    <article className={`service-card service-card--${variant}`}>
      <ServiceIcon name={service.icon} />
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      {service.features && (
        <ul className="service-card__features">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
