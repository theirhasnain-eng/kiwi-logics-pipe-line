import { Link } from 'react-router-dom';
import './styling/privacy.css';
import { FaCheck } from 'react-icons/fa';

export default function Privacy(){
    return(

        <>
                  <section className="contact-hero">
                    <div className="main">
                      <h1>Privacy Policy</h1>
                      <p>How we collect, use, and protect your personal information.</p>
                      <div className="btn">
                        <Link to="/" className="btn-text">Home  /  </Link>
                        <Link to="/privacy" className="btn-text">Privacy policy</Link>
                      </div>
                    </div>
                  </section>
                 
                  <section class="privacy-section">
                    <div class="container narrow">
                     <p class="updated">Last updated: February 24, 2026</p>
 
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, make a purchase, fill out a form, or communicate with us. This may include:</p>
                    
                                 <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Name, email address, phone number, and mailing address</span>
                                  </div>
                                   <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Payment information and billing details</span>
                                  </div>
                                   <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Account preferences and communication choices</span>
                                  </div>         
                                   <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Any other information you choose to provide</span>
                                  </div>
 
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>

                    <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Provide, maintain, and improve our services</span>
                                  </div>
                                   <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Process transactions and send related information</span>
                                  </div>
                                   <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Send promotional communications (with your consent)</span>
                                  </div>         
                                   <div className="plan-item">
                                    <FaCheck className="check-icon" /><span>Respond to your comments, questions, and requests</span>
                                  </div>
                    
 
                    <h2>3. Data Security</h2>
                    <p className='securty'>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.</p>
 
                    <h2>4. Your Rights</h2>
                    <p className='right'>Depending on your location, you may have the following rights regarding your personal data:</p>
 
                 <div class="rights-grid">
                    <div class="right-card">
                      <h3>Access &amp; Portability</h3>
                      <p>Request a copy of your personal data in a portable format.</p>
                    </div>
                <div class="right-card">
                     <h3>Correction</h3>
                     <p>Request correction of inaccurate or incomplete data.</p>
                </div>
                <div class="right-card">
                  <h3>Deletion</h3>
                  <p>Request deletion of your personal data under certain conditions.</p>
                </div>
                <div class="right-card">
                 <h3>Opt-Out</h3>
                 <p>Unsubscribe from marketing communications at any time.</p>
                </div>
               </div>
 
               <h2>5. Contact Us</h2>
               <p className='contac'>If you have any questions about this privacy policy or our data practices, please contact us:</p>
              <div class="contact-box">
                 <strong>PipelineIQ</strong>
                 <p>Email: <Link to="/contact">Contact us here</Link></p>
             </div>
            </div>
       </section>
 
        
        
    </>
    )
}