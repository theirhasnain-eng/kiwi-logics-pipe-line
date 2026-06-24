import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import "./styling/contact.css";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMsg("success");
    e.target.reset();

    setTimeout(() => {
      setMsg("");
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "(555) 234-5678",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "sales@pipelineiq.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      text: "350 Market Street\nSan Francisco, CA 94105",
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      text:
        "Mon - Fri: 8:00 AM - 6:00 PM PST\nSat - Sun: Closed",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="text-center">
        <div className="section-label">
          Get In Touch
        </div>

        <h2 className="section-title">
          Talk to Our Sales Team
        </h2>

        <p className="section-sub">
          Ready to transform your sales process?
          Fill out the form and our team will
          reach out within 24 hours.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT SIDE */}

        <div className="contact-form-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label>Work Email</label>

                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="(555) 234-5678"
                />
              </div>

              <div className="form-group">
                <label>Team Size</label>

                <select>
                  <option>
                    Select team size
                  </option>
                  <option>1–5 users</option>
                  <option>6–20 users</option>
                  <option>21–50 users</option>
                  <option>51–100 users</option>
                  <option>100+ users</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>
                How can we help?
              </label>

              <textarea
                placeholder="Tell us about your sales team and what you're looking for in a CRM..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Request Demo →
            </button>

            {msg === "success" && (
              <div className="form-success">
                ✅ Thank you! Our team
                will reach out within 24
                hours.
              </div>
            )}
          </form>
        </div>

        {/* RIGHT SIDE */}

        <div className="contact-info">
          {contactInfo.map((item) => (
            <div
              className="info-block"
              key={item.title}
            >
              <div className="info-icon">
                {item.icon}
              </div>

              <div>
                <h4>{item.title}</h4>

                <p
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.064610856!2d-122.44791269999999!3d37.7577627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e2e3c195%3A0xcfaa3e4c8b31d264!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="220"
              style={{
                border: 0,
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}