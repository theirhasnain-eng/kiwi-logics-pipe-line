import Footer from '../components/Footer';
import Navebar from '../components/Navebar';
import { Link } from 'react-router-dom';
import './styling/integration.css';
import { useEffect, useRef } from 'react'






const integration = [
  {
    icon: "S",
    title: "Salesforce",
    btn: "CRM",
    color: "#4e6f9b7e",
    desc: "Bi-directional sync with Salesforce for seamless data migration and hybrid workflows."
  },
  {
    icon: "S",
    title: "Slack",
    btn: "Communication",
    color: "#2c864b8c",
    desc: "Get real-time deal alerts, team notifications, and pipeline updates directly in your Slack channels."
  },
  {
    icon: "G",
    title: "Gmail",
    btn: "Email",
    color: "#53481b75",
    desc: "Native Gmail integration with automatic email logging, templates, and scheduling."
  },
  {
    icon: "O",
    title: "Outlook",
    btn: "Email",
    color: "#8b7a34b7",
    desc: "Full Microsoft Outlook support including calendar sync, email tracking, and contact management."
  },
  {
    icon: "Z",
    title: "Zapier",
    btn: "Automation",
    color: "#a074418c",
    desc: "Connect PipelineIQ with 5,000+ apps through Zapier for unlimited automation possibilities."
  },
  {
    icon: "H",
    title: "HubSpot",
    btn: "Marketing",
    color: "#b3314088",
    desc: "Sync marketing qualified leads and campaign data for complete funnel visibility."
  },
  {
    icon: "S",
    title: "Stripe",
    btn: "Payments",
    color: "#22b488af",
    desc: "Automatically create deals from Stripe payments and track subscription revenue."
  },
  {
    icon: "Z",
    title: "Zoom",
    btn: "Video",
    color: "#758ba7d3",
    desc: "Schedule and launch Zoom meetings directly from deal records with auto-logging."
  },
  {
    icon: "G",
    title: "Google Calendar",
    btn: "Scheduling",
    color: "#7ba088cc",
    desc: "Two-way calendar sync so your meetings, follow-ups, and tasks stay organized."
  },
  {
    icon: "L",
    title: "LinkedIn",
    btn: "Social",
    color: "#7985b6c5",
    desc: "Import LinkedIn connections, track social engagement, and enrich contact profiles."
  },
  {
    icon: "I",
    title: "Intercom",
    btn: "Support",
    color: "#9154768e",
    desc: "Route qualified conversations from Intercom directly into your sales pipeline."
  },
  {
    icon: "S",
    title: "Segment",
    btn: "Data",
    color: "#80a5949f",
    desc: "Unified customer data platform integration for complete behavioral analytics."
  }
];


export default function Integrations() {

  const cardsRef = useRef([])
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.1 }
      )
      cardsRef.current.forEach(c => c && observer.observe(c))
      return () => observer.disconnect()
    }, [])
  return (
    <main className="page-section">
      <Navebar/>
           <section className="contact-hero">
             <div className="main">
               <h1>Integrations</h1>
               <p>Connect PipelineIQ with the tools your team already uses. 200+ integrations and growing.</p>
               <div className="btn">
                 <Link to="/" className="btn-text">Home</Link>
                 <div>/</div>
                 <Link to="/integration" className="btn-text">Integration</Link>
               </div>
             </div>
           </section>
            <section className="feature" id="feature">
      <div className="text-center">

        <div className="heading">Works With Your Stack</div>
        <p className="section-sub">From email and calendar to marketing automation and payments, PipelineIQ integrates with the tools your team relies on every day.</p>
      </div>
      <div className="features-grid">
        {integration.map((f, i) => (
          <div
            key={f.title}
            className="feature-card reveal"
            ref={el => cardsRef.current[i] = el}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="feature-main">
              <div className="sub-main">
            <div className="feature-icon">{f.icon}</div>
            <div className="card-submain">
              <h1>{f.title}</h1>
              <h4 style={{ backgroundColor: f.color }}>
                  {f.btn}
              </h4>
            </div>
            </div>
            <p className='feature-p'>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
            </section>

            <section className="contact-hero">
             <div className="main-sub">
               <h1>Don't See Your Tool?</h1>
               <p>We're constantly adding new integrations. Let us know what tools you need and we'll prioritize them.</p>
               <div className="btn">
                 <Link to="/integrations" className="integ-btn">Request Integration</Link>
               </div>
             </div>
           </section>

      <Footer/>
    </main>
  );
}
