import { FaRegCalendarAlt } from "react-icons/fa";
import "./styling/ctaband.css";

export default function CTABand() {
  return (
    <section className="cta-band" data-aos="fade-up">
      <div className="pattern" data-aos="fade-up"></div>

      <div className="cta-content" data-aos="fade-up">
        <h2>Ready to Close More Deals?</h2>

        <p>
          Join 10,000+ sales teams already using PipelineIQ to supercharge their
          sales process. Start your free trial today.
        </p>

        <div className="cta-btns" data-aos="fade-up">
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
