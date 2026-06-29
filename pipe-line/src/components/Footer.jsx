import './styling/footer.css'
import { Link } from 'react-router-dom';
import {
  FaSun,
  FaMoon,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
   FaLinkedinIn,
   FaGithub,
   FaTwitter
} from 'react-icons/fa'
function Footer(){
    return(
        <>

           <footer >
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">P</div>
            Pipeline<span>IQ</span>
          </div>
          <p>Smart CRM that closes deals. AI-powered sales platform for modern teams to manage pipelines, automate outreach, and drive revenue growth.</p>
          <div className="footer-contact">
            <span> <FaPhoneAlt /> (555) 234-5678</span>
            <span><FaEnvelope /> sales@pipelineiq.com</span>
            <span><FaMapMarkerAlt /> 350 Market Street, San Francisco, CA 94105</span>
          </div>
           <div className="social-icons">
                 <a href="#"><FaLinkedinIn /></a>
                 <a href="#"><FaGithub /></a>
                 <a href="#"><FaTwitter /></a>
            </div>
        </div>

{[
  {
    title: "Product",
    links: [
      { name: "Pipeline", path: "/features" },
      { name: "Contacts", path: "/features" },
      { name: "Analytics", path: "/integrations" },
      { name: "Automation", path: "/features" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Careers", path: "/contact" },
      { name: "Blog", path: "/blog" },
      { name: "Press", path: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", path: "/contact" },
      { name: "API Docs", path: "/features" },
      { name: "Status", path: "/pricing" },
      { name: "Contact", path: "/contact" },
    ],
  },
].map((col) => (
  <div className="footer-col" key={col.title}>
    <h4>{col.title}</h4>

    <ul>
      {col.links.map((link) => (
        <li key={link.name}>
          <Link to={link.path}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}
      </div>

      <div className="footer-bottom">
        <p>© 2026 PipelineIQ. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Style Guide</a>
        </div>
      </div>
    </footer>
        </>
    )
}
export default Footer;