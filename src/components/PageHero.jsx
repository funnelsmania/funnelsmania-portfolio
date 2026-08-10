export default function PageHero({ label, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__content">
          {label && <span className="section-label">{label}</span>}
          <h1 className="page-hero__title">{title}</h1>
          {description && <p className="page-hero__description">{description}</p>}
        </div>
      </div>
    </section>
  );
}
