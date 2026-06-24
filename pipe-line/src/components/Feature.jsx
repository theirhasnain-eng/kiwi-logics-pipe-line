import { useEffect, useRef } from 'react'
import './styling/features.css'

import {
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaChartBar,
  FaHandshake,
  FaRobot,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "Pipeline Management",
    desc: "Visualize your entire sales pipeline with drag-and-drop deal stages, custom workflows, and real-time revenue forecasting at a glance."
  },
  {
    icon: <FaUsers />,
    title: "Contact Management",
    desc: "Centralize all customer data with rich contact profiles, interaction history, company hierarchies, and automated data enrichment."
  },
  {
    icon: <FaEnvelope />,
    title: "Email Automation",
    desc: "Create personalized email sequences, track opens and clicks, and automate follow-ups based on prospect behavior and engagement."
  },
  {
    icon: <FaChartBar />,
    title: "Sales Analytics",
    desc: "Make data-driven decisions with customizable dashboards, win/loss analysis, team performance metrics, and revenue forecasting."
  },
  {
    icon: <FaHandshake />,
    title: "Team Collaboration",
    desc: "Assign leads, share notes, coordinate handoffs, and keep your entire sales team aligned with built-in collaboration tools."
  },
  {
    icon: <FaRobot />,
    title: "AI Lead Scoring",
    desc: "Prioritize your highest-value prospects with machine learning models that analyze engagement patterns and predict deal outcomes."
  },
];

export default function Feature() {
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
    <section className="features" id="features">
      <div className="text-center">
        <div className="section-label">Features</div>
        <h2 className="section-title">Everything You Need to Sell Smarter</h2>
        <p className="section-sub">A complete suite of sales tools designed to help your team close more deals, build stronger relationships, and grow revenue predictably.</p>
      </div>
      <div className="features-grid">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="feature-card reveal"
            ref={el => cardsRef.current[i] = el}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
