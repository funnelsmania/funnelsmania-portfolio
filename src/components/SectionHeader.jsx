export default function SectionHeader({ label, title, description, align = 'center' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
