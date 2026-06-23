import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styling/hero.css';
import { FaBook } from 'react-icons/fa';
function Hero(){

      const headings = [
    "Automation",
    "Sales Intelligence",
    "AI-Powered CRM",
    "Smart Pipelines"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
    return(
        <>
    <section className="hero" id="home">
      <div className="hero-badge">
        <span className="dot"></span>
        Trusted by 10,000+ sales teams worldwide
      </div>

      <h1>
        Close More Deals with<br />
        <span className="gradient">{headings[index]}</span>
      </h1>

      <p>
        PipelineIQ helps sales teams manage pipelines, automate outreach, and
        close deals faster with AI-powered insights and intelligent workflow automation.
      </p>

        <div className="hero-btns">
              <Link to="/contact" className="custom-btn btn1">Start Free Trial →</Link>
              <Link to="/contact" className="custom-btn btn2">
               <FaBook style={{ marginRight: "8px ", color:"blue" }} />
              Book a Demo
                 </Link>
        </div>

        <div className="line"></div>

      <div className="hero-stats">
        {[
          { num: '10K+', label: 'Teams Worldwide' },
          { num: '50M+', label: 'Deals Tracked' },
          { num: '99.9%', label: 'Uptime SLA' },
          { num: '4.9/5', label: 'User Rating' },
        ].map(s => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Dashboard Preview */}
      <div className="hero-dashboard">
        <div className="dash-bar">
          <div className="dot-r" /><div className="dot-y" /><div className="dot-g" />
          <div className="dash-url">app.pipelineiq.com/dashboard</div>
        </div>
        <div className="dash-body">
          <div className="dash-card">

                  <div className="dash-card-main">
                    <div><div className="dash-card-title">Revenue Pipeline</div></div>
            <div className="dash-card-value">$2.4M</div>
                  </div>
               <div className="dash-card-change">↑ +24% this month</div>
          </div>
          {/* <div className="dash-card">
            <div className="dash-card-title">Active Deals</div>
            <div className="dash-card-value">85</div>
            <div className="dash-card-change">↑ +12 this week</div>
          </div> */}
          {/* <div className="dash-card">
            <div className="dash-card-title">Closed Won</div>
            <div className="dash-card-value">$890K</div>
            <div className="dash-card-change">↑ +18% vs last month</div>
          </div> */}
          <div className="pipeline-stages">
            {[
              { name: 'Qualified', count: 42, color: '#60a5fa', width: '80%' },
              { name: 'Proposal', count: 28, color: '#a78bfa', width: '60%' },
              { name: 'Negotiation', count: 15, color: '#fb923c', width: '40%' },
              { name: 'Closed Won', count: "$890k", color: '#10b981', width: '90%' },
            ].map(s => (
              <div className="stage" key={s.name}>
                <div className="stage-name">{s.name}</div>
                <div className="stage-count" style={{ color: s.color }}>{s.count}</div>
                <div className="stage-bar" style={{ background: s.color, width: s.width }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
        </>
    )
       
    
}
export default Hero;