import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileCTA() {
  return (
    <div className="mobile-cta" data-aos="fade-up">
      <Link to="/contact" className="demo-btn" data-aos="fade-up">
        {" "}
        <FaCalendarCheck /> Book Demo
      </Link>

      <Link to="/pricing" className="trial-btn">
        Start Trial
      </Link>
    </div>
  );
}
