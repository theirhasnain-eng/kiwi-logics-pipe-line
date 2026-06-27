import Footer from '../components/Footer';
import Navebar from '../components/Navebar';
import { Link } from 'react-router-dom';
import './styling/feature.css';

export default function Features() {
  return (
    <main className="page-section">
      <Navebar/>
          <section className="contact-hero">
            <div className="main">
              <h1>Platform Features</h1>
              <p>Discover the powerful tools and capabilities that make PipelineIQ the preferred CRM for modern sales teams.</p>
              <div className="btn">
                <Link to="/" className="btn-text">Home</Link>
                <div>/</div>
                <Link to="/features" className="btn-text">Features</Link>
              </div>
            </div>
          </section>






















              <section className="contact-hero">
                <div className="main">
                  <h1>Ready to Transform Your Sales?</h1>
                  <p >Start your 14-day free trial and see why 10,000+ sales teams trust PipelineIQ to close more deals.</p>
                  <div className="btn">
                    <Link to="/" className="sale-btn">Start Free Trail</Link>
                    <div>/</div>
                    <Link to="/contact" className="sale-btn">Book a Demo</Link>
                  </div>
                </div>
              </section>
      <h1>Features Page</h1>
      <Footer/>
    </main>
  );
}
