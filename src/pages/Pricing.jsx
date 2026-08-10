import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PricingCard from '../components/PricingCard';
import CTASection from '../components/CTASection';
import { pricingTiers } from '../data/pricing';
import { pageMeta } from '../data/siteConfig';

const faqs = [
  {
    question: 'What is included in the one-time pricing?',
    answer:
      'Each plan includes the listed deliverables, setup, and support period. Additional revisions or scope changes can be discussed separately.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      'Absolutely. You can upgrade at any time and we will credit your previous investment toward the higher tier.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes. After your included support period, we offer monthly retainer packages for maintenance, optimization, and continued growth.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Starter projects typically take 2–3 weeks. Growth and Premium projects range from 4–8 weeks depending on scope and complexity.',
  },
];

export default function Pricing() {
  const meta = pageMeta.pricing;

  return (
    <>
      <SEO title={meta.title} description={meta.description} />

      <PageHero
        label="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your business stage. All plans include a dedicated project manager and quality guarantee."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="faq-section">
            <h2 className="faq-section__title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary className="faq-item__question">{faq.question}</summary>
                  <p className="faq-item__answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which plan is right for you?"
        description="Book a free consultation and we will recommend the best approach for your business goals and budget."
      />
    </>
  );
}
