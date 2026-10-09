import Button from './Button';
import { founder } from '../data/founder';

export default function FounderProfile({ variant = 'full' }) {
  if (variant === 'compact') {
    return (
      <section className="founder-compact section">
        <div className="container">
          <div className="founder-compact__inner">
            <div className="founder-compact__photo-wrap">
              <img
                src={founder.photo}
                alt={founder.photoAlt}
                className="founder-compact__photo"
                width={280}
                height={280}
                loading="lazy"
              />
            </div>
            <div className="founder-compact__content">
              <span className="section-label">Meet the Founder</span>
              <h2 className="founder-compact__name">{founder.name}</h2>
              <p className="founder-compact__title">{founder.title}</p>
              <p className="founder-compact__tagline">{founder.tagline}</p>
              <p className="founder-compact__intro">{founder.intro}</p>
              <div className="founder-compact__actions">
                <Button to="/about">Learn More About Me</Button>
                <Button to="/contact" variant="outline">
                  Book a Free Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="founder-profile">
      <div className="founder-profile__photo-wrap">
        <img
          src={founder.photo}
          alt={founder.photoAlt}
          className="founder-profile__photo"
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="founder-profile__content">
        <span className="section-label">About Me</span>
        <h2 className="founder-profile__name">{founder.name}</h2>
        <p className="founder-profile__title">{founder.title}</p>
        <p className="founder-profile__tagline">{founder.tagline}</p>
        {founder.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="founder-profile__text">
            {paragraph}
          </p>
        ))}
        <div className="founder-profile__focus">
          <h3 className="founder-profile__focus-title">What I Focus On</h3>
          <ul className="founder-profile__focus-list">
            {founder.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <Button to="/contact">Book a Free Strategy Call</Button>
      </div>
    </div>
  );
}
