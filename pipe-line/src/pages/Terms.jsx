import { Link } from "react-router-dom";
import "./styling/terms.css";
import { FaCheck } from "react-icons/fa";
export default function Terms() {
  return (
    <>
      <section className="contact-hero">
        <div className="main">
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using our services.</p>
          <div className="btn">
            <Link to="/" className="btn-text">
              Home /{" "}
            </Link>
            <Link to="/terms" className="btn-text">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="container narrow">
          <p class="updated">Last updated: February 24, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the PipelineIQ website and services, you
            accept and agree to be bound by these Terms of Service and our
            Privacy Policy. If you do not agree to these terms, please do not
            use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            PipelineIQ provides a cloud-based CRM and sales platform. We reserve
            the right to modify, suspend, or discontinue any part of our
            services at any time without prior notice.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and
            complete information. You are responsible for:
          </p>

          <div className="plan-item">
            <FaCheck className="check-icon" />
            <span>
              Maintaining the confidentiality of your account credentials
            </span>
          </div>
          <div className="plan-item">
            <FaCheck className="check-icon" />
            <span>All activities that occur under your account</span>
          </div>
          <div className="plan-item">
            <FaCheck className="check-icon" />
            <span>Notifying us immediately of any unauthorized use</span>
          </div>

          <h2>4. Payment Terms</h2>
          <p>
            All fees are quoted in US dollars unless otherwise stated. Payment
            is due at the time of purchase. We accept major credit cards and
            other payment methods as displayed during checkout. All sales are
            final unless otherwise specified in our refund policy.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of PipelineIQ or its content
            suppliers and is protected by intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            PipelineIQ shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use
            or inability to use the service.
          </p>

          <h2>7. Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us:</p>

          <div class="contact-box">
            <strong>PipelineIQ</strong>
            <p>
              Email:
              <Link to="/contact">Contact us here</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
