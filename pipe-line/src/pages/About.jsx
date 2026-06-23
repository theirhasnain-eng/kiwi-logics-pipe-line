
import Footer from '../components/Footer'
import Navebar from '../components/Navebar'
import './styling/about.css'

export default function About(){
    return(
        <>
        <Navebar/>

        <section className="contact-section" id="contact">
  <div className="contact-container">
    <h2>Get a Free Demo</h2>
    <p>
      See how PipelineIQ can help your team close more deals.
    </p>

    <form className="contact-form">
      <div className="form-row">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
      </div>

      <div className="form-row">
        <input type="text" placeholder="Company Name" />
        <input type="tel" placeholder="Phone Number" />
      </div>

      <textarea
        rows="5"
        placeholder="Tell us about your requirements"
      ></textarea>

      <button type="submit">
        Book a Demo
      </button>
    </form>
  </div>
</section>
             <h1>About Page</h1>
         
        </>
    )};