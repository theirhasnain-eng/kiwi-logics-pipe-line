import { FaRegCalendarAlt } from "react-icons/fa";
import "./styling/ctaband.css";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="pattern"></div>

      <div className="cta-content">
        <h2>Ready to Close More Deals?</h2>

        <p>
          Join 10,000+ sales teams already using PipelineIQ to
          supercharge their sales process. Start your free trial
          today.
        </p>

        <div className="cta-btns">
          <a href="#contact" className="cta-primary">
            Start Free Trial →
          </a>

          <a href="#contact" className="cta-secondary">
            <FaRegCalendarAlt />
            <span>Book a Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}