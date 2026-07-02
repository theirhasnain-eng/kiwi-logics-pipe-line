import Footer from "../components/Footer";
import Navebar from "../components/Navebar";
import { Link } from "react-router-dom";
import "./styling/pricing.css";
import FAQ from "../components/FAQ";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function Pricing() {
  return (
    <main className="page-section">
      <section className="contact-hero">
        <div className="main">
          <h1>Pricing</h1>
          <p>
            Simple, transparent pricing for every team size. Start free and
            scale as you grow.
          </p>
          <div className="btn">
            <Link to="/" className="btn-text">
              Home /{" "}
            </Link>

            <Link to="/pricing" className="btn-text">
              Pricing
            </Link>
          </div>
        </div>
      </section>
      <section className="plan">
        <div className="plan-main">
          <h3>Pricing</h3>
          <h1>Choose Your Plan</h1>
          <h5>
            Start with a 14-day free trial on any plan. No credit card required.
            Cancel anytime.
          </h5>

          <div className="plan-submain">
            {/* Starter */}
            <div className="plan-card">
              <h2>Starter</h2>
              <p>For small sales teams getting started</p>

              <h1>$29</h1>
              <div>
                <h6>per user / month</h6>
              </div>

              <div className="plan-list">
                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Up to 5 users</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>10,000 contacts</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Basic pipeline management</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Email tracking & templates</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Standard reporting</span>
                </div>

                <div className="plan-item disable">
                  <FaTimes className="cross-icon" />
                  <span>AI lead scoring</span>
                </div>
              </div>

              <button>
                <Link to="/contact">Start Free Trial</Link>
              </button>
            </div>

            {/* Professional */}
            <div className="plan-card active-card">
              <div className="badge">Most Popular</div>

              <h2>Professional</h2>
              <p>For growing teams that need more power</p>

              <h1>$79</h1>
              <div>
                <h6>per user / month</h6>
              </div>

              <div className="plan-list">
                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Up to 25 users</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Unlimited contacts</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Advanced pipeline & automation</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Email sequences & A/B testing</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>AI lead scoring & forecasting</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Custom dashboards & reports</span>
                </div>
              </div>

              <button className="active-btn">
                <Link to="/contact">Start Free Trial</Link>
              </button>
            </div>

            {/* Enterprise */}
            <div className="plan-card">
              <h2>Enterprise</h2>
              <p>For large organizations with custom needs</p>

              <h1>$199</h1>
              <div>
                <h6>per user / month</h6>
              </div>

              <div className="plan-list">
                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Unlimited users</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Unlimited contacts & storage</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Custom workflows & approval chains</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Advanced AI & predictive analytics</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>Dedicated account manager</span>
                </div>

                <div className="plan-item">
                  <FaCheck className="check-icon" />
                  <span>SSO, audit logs & custom SLA</span>
                </div>
              </div>

              <button>
                <Link to="/contact">Contact Sales</Link>
              </button>
            </div>
          </div>

          <p className="main-p">
            All plans include unlimited contacts, email sync, and mobile app
            access. Annual billing saves 20%.
          </p>
        </div>
      </section>
      <FAQ />
      <section className="contact-hero ">
        <div className="main" id="sale">
          <h1 className="sale-h1">Ready to Close More Deals?</h1>
          <p>
            Start your 14-day free trial today. No credit card required. Our
            team is ready to help you get started.
          </p>
          <div className="btn">
            <Link to="/contact" className="sale-btn " id="plan-btn">
              Start Free Trail
            </Link>
            <Link to="/contact" className="sale-btn1 " id="plan-btn">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
