 import { useState } from "react";
 import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import "./styling/contact.css";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("success");
    e.target.reset();

    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  return (
    <>
    <Navebar/>
    <section className="contact-hero">
      <div className="main">
        <h1>Contact Us</h1>
        <p>Ready to transform your sales process? Get in touch with our team for a personalized demo or any questions.</p>
        <div className="btn">
          <Link to="/" className="btn-text">Home</Link>
          <div>/</div>
          <Link to="/contact" className="btn-text">Contact</Link>
        </div>
      </div>
    </section>
    <section className="contact" id="contact">

      <div className="contact-grid">

        {/* LEFT */}

        <div className="contact-left">
          <h2>Talk to Sales</h2>

          <p>
            Tell us about your team and sales goals,
            and we'll show you how PipelineIQ can
            help you close more deals.
          </p>

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

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                placeholder="How can we help your sales team?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                placeholder="Tell us about your team size, current CRM setup, and what challenges you're facing..."
              />
            </div>

            <button className="submit-btn">
              Request Demo →
            </button>

            {msg && (
              <div className="form-success">
                Thank you! We'll contact you shortly.
              </div>
            )}
          </form>
        </div>

        {/* RIGHT */}

        <div className="contact-right">
          <h2>Sales Inquiries</h2>

          <p>
            Our team is available to help you find
            the right plan for your needs.
          </p>

          <div className="info-block">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>sales@pipelineiq.com</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>
              <p>(555) 234-5678</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Address</h4>
              <p>
                350 Market Street,
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <FaClock />
            </div>

            <div>
              <h4>Business Hours</h4>
              <p>
                Mon - Fri: 8:00 AM - 6:00 PM PST
                <br />
                Sat - Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
            <div className="full-map">
  <iframe
    src="https://maps.google.com/maps?q=San%20Francisco%20California&t=&z=13&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Office Location"
  />
</div>
    <Footer/>
    </>
  );
}
