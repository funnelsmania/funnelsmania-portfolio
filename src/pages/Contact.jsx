import { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { siteConfig, pageMeta } from '../data/siteConfig';

const contactMethods = [
  {
    icon: 'email',
    title: 'Email',
    description: 'Send me a message anytime. I respond within 24 hours.',
    action: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    linkText: siteConfig.email,
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    description: 'Prefer a quick chat? Message us on WhatsApp for fast responses.',
    action: siteConfig.whatsapp,
    href: siteConfig.whatsappLink,
    linkText: 'Start a Conversation',
  },
  {
    icon: 'calendar',
    title: 'Book a Strategy Call',
    description: 'Schedule a free 30-minute call to discuss your Shopify store and goals.',
    action: 'Calendly',
    href: siteConfig.calendlyLink,
    linkText: 'Schedule on Calendly',
  },
];

const serviceOptions = [
  'Shopify Store Setup',
  'Shopify Development',
  'Shopify Consulting',
  'N8N Automation',
  'AI Workflow Automation',
  'Ecommerce Growth Strategy',
  'Not Sure Yet',
];

export default function Contact() {
  const meta = pageMeta.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="Contact"
        title="Let's Talk About Your Store"
        description="Book a free strategy call or send a message — I'll get back to you within 24 hours."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-methods">
              {contactMethods.map((method) => (
                <article key={method.title} className="contact-method">
                  <div className="contact-method__icon">
                    {method.icon === 'email' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.33 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    )}
                    {method.icon === 'whatsapp' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    )}
                    {method.icon === 'calendar' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    )}
                  </div>
                  <h3 className="contact-method__title">{method.title}</h3>
                  <p className="contact-method__description">{method.description}</p>
                  <a href={method.href} className="contact-method__link" target={method.icon !== 'email' ? '_blank' : undefined} rel={method.icon !== 'email' ? 'noopener noreferrer' : undefined}>
                    {method.linkText}
                  </a>
                </article>
              ))}
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="contact-success__title">Message Sent!</h2>
                  <p className="contact-success__text">
                    Thank you for reaching out. We will review your message and get back to you
                    within 24 hours.
                  </p>
                  <Button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', message: '' }); }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="contact-form__title">Send Us a Message</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>
                  <Button type="submit" className="contact-form__submit">
                    {siteConfig.primaryCta}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
