import { useState } from "react";
import "./styling/testo.css";

const testimonials = [
  {
    quote:
      "PipelineIQ transformed our sales process. We went from scattered spreadsheets to a unified pipeline that increased our close rate by 40% in just three months.",
    name: "Sarah Chen",
    role: "VP of Sales, TechScale Inc.",
  },
  {
    quote:
      "The AI lead scoring alone is worth the investment. Our reps now focus on the right deals at the right time, and our average deal size has grown by 25%.",
    name: "Marcus Johnson",
    role: "Sales Director, GrowthWave",
  },
  {
    quote:
      "We evaluated six CRM platforms before choosing PipelineIQ. The onboarding was seamless and our team was productive within the first week.",
    name: "Emily Rodriguez",
    role: "Head of Revenue, CloudFirst",
  },
  {
    quote:
      "The email automation sequences have completely changed how we nurture leads. Our response rates tripled and we are booking more demos than ever.",
    name: "David Park",
    role: "Sales Manager, DataBridge",
  },
  {
    quote:
      "PipelineIQ integrates perfectly with our existing tech stack. Slack notifications, Zoom scheduling, Gmail sync — it all just works seamlessly.",
    name: "Rachel Foster",
    role: "RevOps Lead, ScaleUp Labs",
  },
  {
    quote:
      "The analytics dashboards give us real-time visibility into our pipeline health. We can forecast revenue accurately and make smarter hiring decisions.",
    name: "James Mitchell",
    role: "CRO, Velocity Partners",
  },
];

export default function Testomonolies() {
  const [slide, setSlide] = useState(0);

  const totalSlides = testimonials.length - 2;

  const nextSlide = () => {
    if (slide < totalSlides - 1) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const visibleCards = testimonials.slice(slide, slide + 3);

  return (
    <section className="testimonials" id="testimonials">
      <div className="text-center">
        <div className="section-label">
          Testimonials
        </div>

        <h2 className="section-title">
          Trusted by Sales Leaders
        </h2>

        <p className="section-sub">
          See how PipelineIQ helps sales teams around the world close more deals.
        </p>
      </div>

      <div className="testimonials-wrapper">
        <button
          className="nav-btn prev"
          onClick={prevSlide}
          disabled={slide === 0}
        >
          &#10094;
        </button>

        <div className="testimonials-grid">
          {visibleCards.map((t) => (
            <div className="tcard" key={t.name}>
              <div className="stars">
                ★★★★★
              </div>

              <blockquote>
                "{t.quote}"
              </blockquote>

              <div className="tcard-author">
                <div className="avatar">
                  {t.name[0]}
                </div>

                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-btn next"
          onClick={nextSlide}
          disabled={slide === totalSlides - 1}
        >
          &#10095;
        </button>
      </div>

      <div className="slider-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={
                slide === index
                 ? "slider-dot active"
                  : "slider-dot"
            }
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}