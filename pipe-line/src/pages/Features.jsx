import Footer from '../components/Footer';
import Navebar from '../components/Navebar';
import { Link } from 'react-router-dom';
import result from '../assets/result.jpg'
import sell from '../assets/sell.jpg'
import scale from '../assets/scale.jpg'
import decision from '../assets/decision.jpg'
import './styling/feature.css';
import { BiSignal3 } from "react-icons/bi"
import { FaUser,FaCertificate, FaUsers, FaCheck } from 'react-icons/fa';









const deals= [
  {
    icon: <BiSignal3 />,
    title: "10,000+ Active Teams",
    desc: "Trusted by sales teams worldwide to manage their pipeline and close deals faster than ever before."
  },
  {
    icon: <FaCertificate />,
    title: "99.9% Uptime SLA",
    desc: "Enterprise-grade reliability with SOC 2 compliance and redundant infrastructure across multiple regions."
  },
    {
    icon: <FaUsers/>,
    title: "24/7 Expert Support",
    desc: "Dedicated customer success team with average response time under 5 minutes for all plan levels."
  },
]

export default function Features() {
  return (
    <main className="page-section">
     
          <section className="contact-hero">
            <div className="main">
              <h1>Platform Features</h1>
              <p className='pera'>Discover the powerful tools and capabilities that make PipelineIQ the preferred CRM for modern sales teams.</p>
              <div className="btn">
                <Link to="/" className="btn-text">Home  /  </Link>
                <Link to="/features" className="btn-text">Features</Link>
              </div>
            </div>
          </section>
        
             <section className='value 'id='deal'>
            <div className="value-text">
              <h1>Everything You Need to Close More Deals</h1>
              <p className='deal-p'>PipelineIQ combines AI-powered insights with intuitive design to help your sales team work smarter, not harder. From lead capture to deal closure, every stage of your pipeline is optimized for success.</p>
            </div>
            
      <div className="features-grid" id='value-grid'>
        {deals.map((f, i) => (
          <div
            key={f.title}
            className="feature-card reveal value-card"
          >
            <div className="feature-icon icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
          </section>
           <section className="feature-section">
      <div className="feature-left">
        <h5>Pipeline Management</h5>

        <h1>
          Visual Pipeline That Drives Results
        </h1>

        <p>
          Drag-and-drop deal management with customizable stages,
          automated workflows, and real-time revenue forecasting
          that keeps your entire team aligned.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Drag-and-drop Kanban boards</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Custom deal stages and workflows</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Weighted revenue forecasting</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Automated deal rot alerts</span>
          </div>
        </div>
      </div>

      <div className="feature-right">
        <img src={result} alt="Dashboard" />
      </div>
    </section>
    <section className="feature-section sell">

      <div className="feature-right">
        <img src={sell} alt="Dashboard" />
      </div>
      <div className="feature-left">
        <h5>AI Intelligence</h5>

        <h1>
          AI That Actually Helps You Sell
        </h1>

        <p>
        Machine learning models trained on millions of sales interactions to predict deal outcomes, recommend next best actions, and score leads automatically.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Predictive lead scoring with 92% accuracy</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Smart email suggestions and templates</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Deal win probability forecasting</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Conversation intelligence and coaching</span>
          </div>
        </div>
      </div>
    </section>
    <section className="feature-section">
      <div className="feature-left">
        <h5>Email Automation</h5>

        <h1>
          Personalized Outreach at Scale
        </h1>

        <p>
           Build multi-step email sequences with dynamic personalization, A/B testing, and intelligent send-time optimization to maximize engagement.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Multi-step drip campaigns</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Real-time open and click tracking</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>A/B testing with statistical significance</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Gmail and Outlook native integration</span>
          </div>
        </div>
      </div>

      <div className="feature-right">
        <img src={scale} alt="Dashboard" />
      </div>
    </section>
    <section className="feature-section sell">

      <div className="feature-right">
        <img src={decision} alt="Dashboard" />
      </div>
      <div className="feature-left">
        <h5>Analytics</h5>

        <h1>
          Data-Driven Sales Decisions
        </h1>

        <p>
         Real-time dashboards and custom reports that give you visibility into every aspect of your sales performance, from team activity to revenue trends.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Custom dashboard builder with 50+ widgets</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Automated weekly and monthly reports</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Sales velocity and conversion tracking</span>
          </div>

          <div className="feature-item">
            <FaCheck className="check-icon" />
            <span>Team leaderboards and performance metrics</span>
          </div>
        </div>
      </div>
    </section>
             <section className="contact-hero">
                <div className="main" id='sale'>
                  <h1>Ready to Transform Your Sales?</h1>
                  <p >Start your 14-day free trial and see why 10,000+ sales teams trust PipelineIQ to close more deals.</p>
                  <div className="btn">
                    <Link to="/pricing" className="sale-btn">Start Free Trail</Link>
                    <Link to="/contact" className="sale-btn1">Book a Demo</Link>
                  </div>
                </div>
              </section>  
      
    </main>
  );
}
