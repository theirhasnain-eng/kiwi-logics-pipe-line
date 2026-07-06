import { useState, useEffect } from "react";
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

// Must match the flex `gap` value in testo.css (.testimonials-track)
const GAP_PX = 28;
// Must match the breakpoint used in testo.css (@media max-width: 992px)
const MOBILE_BREAKPOINT = 992;

function getCardsPerView() {
  if (typeof window === "undefined") return 3;
  return window.innerWidth <= MOBILE_BREAKPOINT ? 1 : 3;
}

export default function Testomonolies() {
  const [slide, setSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  // Keep cardsPerView in sync with the viewport (this was previously
  // read once at render and never updated on resize).
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(testimonials.length - cardsPerView, 0);

  // If the viewport changes (e.g. tablet -> mobile) totalSlides shrinks;
  // make sure `slide` never points past the last valid index.
  useEffect(() => {
    setSlide((s) => Math.min(s, totalSlides));
  }, [totalSlides]);

  const nextSlide = () => {
    setSlide((s) => Math.min(s + 1, totalSlides));
  };

  const prevSlide = () => {
    setSlide((s) => Math.max(s - 1, 0));
  };

  // The key fix: tcard width is calc((100% - gap*(n-1)) / n), so each
  // slide must move by (100% + gap) / cardsPerView, NOT a flat 100/n %.
  // Mixing % and px inside a single calc() keeps the track's movement
  // exactly matched to each card's real rendered width, so nothing drifts.
  const translate = `calc(-${slide} * (100% + ${GAP_PX}px) / ${cardsPerView})`;

  return (
    <section className="testimonials" id="testimonials">
      <div className="text-center">
        <h3 className="section-label">Testimonials</h3>

        <h2 className="section-title">Trusted by Sales Leaders</h2>

        <p className="section-sub">
          See how PipelineIQ helps sales teams around the world close more deals
          and grow revenue.
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

        <div
          className="testimonials-track"
          style={{
            transform: `translateX(${translate})`,
          }}
        >
          {testimonials.map((t) => (
            <div className="tcard" key={t.name}>
              <div className="stars">★★★★★</div>

              <blockquote>"{t.quote}"</blockquote>

              <div className="tcard-author">
                <div className="avatar">{t.name[0]}</div>

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
          disabled={slide === totalSlides}
        >
          &#10095;
        </button>
      </div>

      <div className="slider-dots">
        {Array.from({ length: totalSlides + 1 }).map((_, index) => (
          <button
            key={index}
            className={slide === index ? "slider-dot active" : "slider-dot"}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
