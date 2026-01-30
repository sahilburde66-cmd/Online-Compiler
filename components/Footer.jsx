import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-bracket">{"<"}</span>
            CodeCompiler
            <span className="logo-bracket">{"/>"}</span>
          </div>
          <div className="footer-copyright">
            © 2026 All Rights Reserved
          </div>
          <div className="footer-links">
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;