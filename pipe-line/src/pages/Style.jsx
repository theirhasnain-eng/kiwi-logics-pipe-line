import { Link } from "react-router-dom";
import "./styling/style.css";
import { FaBolt, FaCheck } from "react-icons/fa";

export default function Style() {
  return (
    <>
      <section className="contact-hero">
        <div className="main">
          <h1>Elements</h1>
          <p>
            UI components and design system elements available in this template.
          </p>
          <div className="btn">
            <Link to="/" className="btn-text">
              Home /{" "}
            </Link>
            <Link to="/style" className="btn-text">
              Elements
            </Link>
          </div>
        </div>
      </section>
      <section className="main-style">
        {/* - TYPOGRAPHY - */}
        <section className="el-section">
          <div className="container narrow">
            <span className="el-eyebrow">Typography</span>
            <h2 className="el-title">Typography</h2>
            <p className="el-sub">
              Heading levels, paragraph styles, and text treatments.
            </p>

            <div className="el-card">
              <h1>Heading 1 — The quick brown fox</h1>
              <h2>Heading 2 — The quick brown fox</h2>
              <h3>Heading 3 — The quick brown fox</h3>
              <h4>Heading 4 — The quick brown fox</h4>
              <h5>Heading 5 — The quick brown fox</h5>
              <h6>Heading 6 — The quick brown fox</h6>

              <hr className="el-divider" />

              <p className="el-lead">
                <strong>Lead text.</strong> This is a lead paragraph with a
                larger font size, suitable for introductions and important
                callouts. It draws the reader's attention and sets the tone for
                the content that follows.
              </p>

              <p>
                <strong>Body text.</strong> This is a standard paragraph used
                for body copy throughout the template. It uses the default font
                size and a comfortable line height for readability. Good
                typography is the foundation of any well-designed interface,
                ensuring that users can easily consume and understand the
                content presented to them.
              </p>

              <p className="el-small">
                <strong>Small text.</strong> This is smaller text, useful for
                captions, footnotes, meta information, and secondary details
                that support the main content.
              </p>

              <blockquote className="el-quote">
                "Design is not just what it looks like and feels like. Design is
                how it works." — Steve Jobs
              </blockquote>
            </div>
          </div>
        </section>

        {/* - BUTTONS - */}
        <section className="el-section el-alt">
          <div className="container narrow">
            <h2 className="el-title">Buttons</h2>
            <p className="el-sub">
              Primary, secondary, and outline button styles in various sizes.
            </p>

            <div className="el-card">
              <h4 className="el-block-title">Variants</h4>
              <div className="el-row">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="el-btn-outline">Outline</button>
              </div>

              <h4 className="el-block-title" style={{ marginTop: "36px" }}>
                Sizes
              </h4>
              <div className="el-row">
                <p className="btn1  el-btn-sm">Small</p>
                <p className="btn1  el-btn-md">Default</p>
                <p className="btn1  el-btn-lg">Large</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="el-divider" />
        {/* -- BADGES -- */}
        <section className="el-section">
          <div className="container narrow">
            <h2 className="el-title">Badges &amp; Tags</h2>
            <p className="el-sub">
              Colored labels for statuses, categories, and metadata.
            </p>

            <div className="el-card">
              <div className="el-row">
                <span className="el-badge el-badge-primary">Primary</span>
                <span className="el-badge el-badge-success">Success</span>
                <span className="el-badge el-badge-warning">Warning</span>
                <span className="el-badge el-badge-error">Error</span>
                <span className="el-badge el-badge-info">Info</span>
                <span className="el-badge el-badge-neutral">Neutral</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="el-divider" />
        {/* <!-- ALERTS --> */}
        <section className="el-section el-alt">
          <div className="container narrow">
            <h2 className="el-title">Alerts / Notices</h2>
            <p className="el-sub">
              Contextual feedback messages for user actions and system states.
            </p>

            <div className="el-alert-stack">
              <div className="el-alert el-alert-info">
                <span className="el-alert-icon">ℹ️</span>
                <div>
                  <h4>Information</h4>
                  <p>
                    This is an informational alert. Use it to highlight neutral
                    tips or contextual information.
                  </p>
                </div>
              </div>
              <div className="el-alert el-alert-success">
                <span className="el-alert-icon">✅</span>
                <div>
                  <h4>Success</h4>
                  <p>Your action has been completed successfully.</p>
                </div>
              </div>
              <div className="el-alert el-alert-warning">
                <span className="el-alert-icon">⚠️</span>
                <div>
                  <h4>Warning</h4>
                  <p>Please review the details carefully before proceeding.</p>
                </div>
              </div>
              <div className="el-alert el-alert-error">
                <span className="el-alert-icon">⛔</span>
                <div>
                  <h4>Error</h4>
                  <p>
                    Something went wrong. Please try again or contact support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* - CARDS - */}

        <section className="el-section">
          <div className="container narrow">
            <h2 className="el-title">Cards</h2>
            <p className="el-sub">
              Flexible content containers with various styles and layouts.
            </p>

            <div className="el-cards-grid">
              <div className="el-demo-card">
                <h3>Basic Card</h3>
                <p>
                  A simple card with a border, padding, and rounded corners.
                </p>
              </div>
              <div className="el-demo-card el-demo-card-hover">
                <h3>Hover Shadow</h3>
                <p>This card elevates on hover with a larger shadow.</p>
              </div>
              <div className="el-demo-card">
                <div className="el-demo-icon">
                  <FaBolt />
                </div>
                <h3>Icon Card</h3>
                <p>Features a prominent icon above the content.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="el-divider" />
        <section className="el-section el-alt">
          <div className="container narrow">
            <h2 className="el-title">Form Elements</h2>
            <p className="el-sub">
              Input fields, selects, textareas, and other form controls.
            </p>

            <div className="el-card">
              <form className="el-form" onSubmit="return false;">
                <div className="el-form-row">
                  <div className="el-form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name " />
                  </div>
                  <div className="el-form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="your@example.com" />
                  </div>
                </div>
                <div className="el-form-group">
                  <label>Subject</label>
                  <select>
                    <option>Select a subject...</option>
                    <option>Request a Demo</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Product Feedback</option>
                  </select>
                </div>
                <div className="el-form-group">
                  <label>Message</label>
                  <textarea
                    rows="4"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
