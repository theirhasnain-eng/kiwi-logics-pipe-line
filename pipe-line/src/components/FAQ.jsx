import { useState } from 'react'
import './styling/faq.css'

const faqs = [
  { q: 'How long does it take to set up PipelineIQ?', a: 'Most teams are up and running within a day. Our guided onboarding wizard walks you through importing contacts, setting up your pipeline stages, and connecting integrations. Enterprise customers get a dedicated onboarding specialist.' },
  { q: 'Can I import data from my existing CRM?', a: 'Yes, PipelineIQ supports one-click imports from Salesforce, HubSpot, Pipedrive, and most other CRM platforms. You can also import via CSV files or our REST API. All your contacts, deals, and history transfer seamlessly.' },
  { q: 'What integrations does PipelineIQ support?', a: 'We integrate with 200+ tools including Gmail, Outlook, Slack, Zoom, Zapier, Salesforce, QuickBooks, and more. Our open API also allows you to build custom integrations for your specific tech stack.' },
  { q: 'Is my data secure with PipelineIQ?', a: 'Absolutely. We use bank-level AES-256 encryption, SOC 2 Type II compliance, and GDPR-compliant data handling. Your data is backed up in real-time across multiple geographic regions with 99.9% uptime guaranteed.' },
  { q: 'Do you offer a free trial?', a: 'Yes, we offer a 14-day free trial on all plans with no credit card required. You get full access to all features so you can evaluate PipelineIQ with your real data and workflows before committing.' },
  { q: 'What kind of support is available?', a: 'All plans include email support with 24-hour response times. Professional plans get priority chat support, and Enterprise customers receive a dedicated account manager, phone support, and custom training sessions.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="text-center">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know about PipelineIQ. Can't find what you're looking for? Contact our support team.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
